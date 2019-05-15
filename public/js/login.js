// var mysql = require('mysql');
// var express = require('express');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');


// var app = express();
// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });

app.post('/auth', function(request, response) {
	$("#loginBtn").on("click", function () {
		var username = request.body.username;
		var password = request.body.password;
		if (username && password) {
			connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results) {
				if (results.length > 0) {
					request.session.loggedin = true;
					request.session.username = username;
					response.redirect('/home');
				} else {
					response.send('Incorrect Username and/or Password!');
				}			
				response.end();
			});
			} else {
			response.send('Please enter Username and Password!');
			response.end();
		}
	});
});


     

// app.get('/home', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

// app.listen(3000);








$(document).ready(function () {

function handleUserFormSubmit(event) {
	// event.preventDefault();
	console.log("clicked button")
	console.log($("#email-input"));
	

	var emailInput = $("#email-input").val().trim();
	var usernameInput = $("#username-input").val().trim();
	var passwordInput = $("#password-input").val().trim();
	var passwordCheck = $("#password-confirm").val().trim();

	// Don't do anything if the name fields hasn't been filled out
	// if (!usernameInput.val().trim().trim()) {
	// 	return;
	// }
	if (passwordInput === passwordCheck) {
		var password = passwordInput;
		upsertUser({
			username: usernameInput,
			email: emailInput,
			password: password,
		});
	} else {
		alert("Your passwords don't match!");
	}

	// console.log("emailInput: " + emailInput);
	// Calling the upsertAuthor function and passing in the value of the name input
	
};

function upsertUser(userData) {
	console.log(userData)
	$.post("/api/user", userData)
	  .then(console.log("I think it worked."));
}

// $(document).on("click", "#signup-button", handleUserFormSubmit());


$( "#signup-button" ).click(function() {
	
	handleUserFormSubmit();

	
  });




//	response.end();
});

// app.listen(3000);






