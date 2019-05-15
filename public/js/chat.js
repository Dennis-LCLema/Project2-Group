$(function () {
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
		

		$('.chat-body').animate({              // this code automatically scrolls the chat down when you press the arrow key
			scrollTop: $('.chat-body')[0].scrollHeight}, "slow");

    });



$.get("/api/user", function(data) {				
	username =  data[data.length-1].username;      //whomever is last signed in the database this will be the username!
	

//this get will load everything previously from the database 
$.get("/api/chat", function(data) {
 for (var i =0; i<data.length-1; i++) {
		original = data.length;
		if (username === data[i].username) {
			$('.msg-insert').append("<div class='msg-send'>"+ data[i].username  + ": " + data[i].body + "</div>");
		} 
		if (username !== data[i].username) {
			$('.msg-insert').append("<div class='msg-receive'>"+ data[i].username + ": " + data[i].body +    "</div>");
		}
	}
});
	
	// a get that displays other users posts...
	$.get('api/chat', function(data) {

		var newDb;  //global variable

		textarea.keypress(function(event) {
			if (event.keyCode ===13) {
			var orignaldb = data[data.length-1].id;
			console.log('the original value is ' + orignaldb);
			Database();     // call the below function
			var difference = newDb-orignaldb; //when Database function is called it updates the var newDB
			console.log('newDB is ' + newDb);
		 	console.log('the difference is ' + difference); //get the difference between the original and current value 
			

			 // this code below will display new information into the chat from other users 
			 if (difference>=1 && username!== display() ) {
				for (var i = original; i<=data.length-1; i++ )  {
					$('.msg-insert').append("<div class='msg-receive'>"+ data[i].username + ": " + data[i].body + "</div>");
					difference = 0;  
					original ++; 
				
					// this code automatically scrolls the chat down when messages update
				   $('.chat-body').animate({  
					scrollTop: $('.chat-body')[0].scrollHeight}, "slow");
					}	
				}; 
	}}  )

// get the new value of the database when you press the enter button 
	function Database () {
		$.get('api/chat', function(data) {   
		  newDb = data[data.length-1].id; 
		 alert(newDb);
		  	})
		}

		 
	function display ()	{ 	//this function will search through all the usernames in the database when called and return the value of a username 
		for (var i=0; i<data.length-1; i++) {
		var users = data[i].username;
		}
		return users; 
		}
	})

//this below function will make a post and add into the chat when you press enter 
	textarea.keypress(function(event) {
		var $this = $(this);

		if(event.keyCode == 13){      // event code 13 is the enter button 

			var msg = $this.val().trim();
			
			$this.val('');     //this is your current message 
            $('.msg-insert').append("<div class='msg-send'>" + "<span style='color:grey; font-weight=bold'>" + username + "</span>" + ":  " + msg + "</div>");
			
			var x = {
				body:msg,
				username: username 
			}

			$('.chat-body').animate({              // this code automatically scrolls the chat down
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