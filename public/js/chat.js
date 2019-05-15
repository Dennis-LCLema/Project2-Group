$(function () {

	var bodyID = ($("body")[0].id);

			if (bodyID === "mlbImage") {
				var categoryID = "mlb";
			} else if (bodyID === "nbaImage") {
				var categoryID = "nba";
			} else if (bodyID === "nflImage") {
				var categoryID = "nfl";
			}

    var arrow = $('.chat-head img');
    var textarea = $('.chat-text textarea');


    // when you click on the arrow it minimizes the chat or expands it
    arrow.on('click', function () {
        var src = arrow.attr('src');

        $('.chat-body').slideToggle('fast');
        if (src == 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png') {
            arrow.attr('src', 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_up-16.png');
        }
        else {
            arrow.attr('src', 'https://maxcdn.icons8.com/windows10/PNG/16/Arrows/angle_down-16.png');
		}
		

		$('.chat-body').animate({   // this code automatically scrolls the chat down when you press the arrow key
			scrollTop: $('.chat-body')[0].scrollHeight}, "slow");

    });



//$.get("/api/user", function(data) {	
//	username = sessionStorage.getItem("username");      //whomever is last signed in the database this will be the username!

$.get("/api/user_data", function(data) {	

	var username = data.username;

	// $.get("/api/user_data").then(function(data) {
	// 	username = data.username;
	// 	console.log("username inside: ", username)
	//   });

 console.log("username outside: ", username)



//this get will load everything previously from the database 

$.get("/api/chat", function(data) {
 for (var i =0; i<data.length-1; i++) {
		
		if (username === data[i].username && data[i].category === categoryID) {
			$('.msg-insert').append("<div class='msg-send'>"+ data[i].username  + ": " + data[i].body + "</div>");
		} 
		if (username !== data[i].username && data[i].category === categoryID) {
			$('.msg-insert').append("<div class='msg-receive'>"+ data[i].username + ": " + data[i].body +    "</div>");
		}
	}
});


var original = '';
var difference = 0;
$.get('api/chat', function(data) {
original = data.length; 
})

// the below will be the 'live' part of the chat.  setInterval function will always check for new posts from other users
setInterval(function(){ 

$.get('api/chat', function(data) {
	
	//function that looks for all usernames in the database
	function display ()	{ 	
	for (var i=0; i<data.length; i++) {
	var usernameDB = data[i].username;
	}
	return usernameDB; 
	}

	function category () {   //gets all the categorys
		for (var i =0; i<data.length; i++) {
			var categorys = data[i].category;
		}
		return categorys; 
	}

var newLength = data.length; // this value will change when you make a new post (because length of database changes)
var difference = newLength - original; // difference will be 0 , 1 when you make a new post


if (difference===1 && username==display() && category() === categoryID) {
	original++;  //update original so that difference will always be 0, until you make another post
}

if (difference===1 && username!== display() && category() === categoryID) {      //when you are not the user display the post
		for (var i = original; i<=data.length-1; i++ )  {
			$('.msg-insert').append("<div class='msg-receive'>" + data[i].username + ": " +  data[i].body + "</div>");

			original++;  //update orignal so that the difference will always 0 until you make a new posts in which case 
			// the difference will be 1
			
			$('.chat-body').animate({    // automatically scrolls the chat down
			scrollTop: $('.chat-body')[0].scrollHeight}, "slow");
			

		}	
	}; 
})

 }, 1000);


//this below function will make a post and add into the chat when you press enter 
	textarea.keypress(function(event) {
		var $this = $(this);

		if(event.keyCode == 13){      // event code 13 is the enter button 

			var msg = $this.val().trim();
			
			$this.val('');     //this is your current message 
            $('.msg-insert').append("<div class='msg-send'>" + "<span style='color:grey; font-weight=bold'>" + username + "</span>" + ":  " + msg + "</div>");
			
			
			console.log("categoryID: ", categoryID);
			var x = {
				body:msg,
				username: username,
				category: categoryID
			}

			$('.chat-body').animate({   // this code automatically scrolls the chat down
			scrollTop: $('.chat-body')[0].scrollHeight}, "slow");
		

	    $.ajax("api/chat", {
			type: "POST", 
			data: x
		}).then(
			function () {
				console.log('post was succesful!')

			})			
}
	});

})  

});