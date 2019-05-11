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

// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	if (username && password) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (results.length > 0) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				response.redirect('/home');
// 			} else {
// 				response.send('Incorrect Username and/or Password!');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		response.send('Please enter Username and Password!');
// 		response.end();
// 	}
// });

// app.get('/home', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

// app.listen(3000);






// $(".login-form").hide();
// $(".login").css("background", "none");

// $(".login").click(function(){
//   $(".signup-form").hide();
//   $(".login-form").show();
//   $(".signup").css("background", "none");
//   $(".login").css("background", "rgb(99, 99, 99)");
// console.log ("click on login")
// });


// $(".signup").click(function(){
//   $(".signup-form").show();
//   $(".login-form").hide();
//   $(".login").css("background", "none");
//   $(".signup").css("background", "rgb(99, 99, 99)");
// console.log("click on sign in")
// });

// $(".btn").click(function(){
//   $(".input").val("");
// });


$(document).ready(function () {

	var emailInput = $("#email-input");
	var usernameInput = $("#username-input");
	var passwordInput = $("#password-input");

	$(document).on("submit", "#signup-button", handleUserFormSubmit);

	function handleUserFormSubmit(event) {
		console.log("clicked button")
		event.preventDefault();
		// Don't do anything if the name fields hasn't been filled out
		if (!usernameInput.val().trim().trim()) {
			return;
		}
		// Calling the upsertAuthor function and passing in the value of the name input
		upsertUser({
			email: emailInput.val().trim(),
			name: nameInput.val().trim(),
			password: passwordInput,
		});
	};

	function upsertUser(userData) {
		console.log(userData)
		// $.post("/api/authors", userData)
		//   .then(getAuthors);
	}

	response.end();
});

app.listen(3000);





});

