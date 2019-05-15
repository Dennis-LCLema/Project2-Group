$(document).ready(function () {

	var signUpForm = $("form.signup");
	var emailInput = $("#email-input");
	var usernameInput = $("#username-input");
	var passwordInput = $("#password-input");
	var passwordCheck = $("#password-confirm");

	// When the signup button is clicked, we validate the email and password are not blank
	signUpForm.on("submit", function (event) {
		event.preventDefault();

		if (passwordInput.val().trim() === passwordCheck.val().trim()) {

			var userData = {
				username: usernameInput.val().trim(),
				email: emailInput.val().trim(),
		  		password: passwordInput.val().trim()
			};

			if (!userData.username || !userData.email || !userData.password) {
				return;
			}
			// If we have a username, email and password, run the signUpUser function
			signUpUser(userData.username, userData.email, userData.password);
			usernameInput.val("");
			emailInput.val("");
			passwordInput.val("");
		} else {
			alert("Your passwords don't match! Please try again.");
		}
	});

	  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    $.post("/api/signup", {
	  username: username,
		email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }


	// function handleUserFormSubmit(event) {

	// 	// Don't do anything if the name fields hasn't been filled out
	// 	// if (!usernameInput.val().trim().trim()) {
	// 	// 	return;
	// 	// }
	// 	if (passwordInput === passwordCheck) {
	// 		var password = passwordInput;
	// 		upsertUser({
	// 			username: usernameInput,
	// 			email: emailInput,
	// 			password: password,
	// 		});
	// 		// sessionStorage.setItem("username", usernameInput);

	// 	} else {
	// 		alert("Your passwords don't match!");
	// 	}

	// 	// console.log("emailInput: " + emailInput);
	// 	// Calling the upsertAuthor function and passing in the value of the name input

	// };

	// function upsertUser(userData) {
	// 	console.log(userData)
	// 	$.post("/api/user", userData)
	// 		.then(console.log("I think it worked."));
	// }

	// // $(document).on("click", "#signup-button", handleUserFormSubmit());


	// $("#signup-button").click(function (event) {

	// 	event.preventDefault();
	// 	handleUserFormSubmit();

	// 	open("/home", "_self");

	// });




	//	response.end();
});







