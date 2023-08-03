$(document).foundation()

$(document).ready(function () {

  // Trigger fadeIn effect when the page is fully loaded
  $("body").fadeIn(300); // Adjust the duration as needed (e.g., 1000ms = 1 second)

  // Define the array for authentication: user list
  var users = [
    { name: 'Urvish', email: 'urvishgajjar@gmail.com', password: 'Puddleshaker@123' },
    { name: 'Arshdeep', email: 'arshdeep@gmail.com', password: 'Puddleshaker@123' },
    { name: 'Suveen', email: 'suveen@gmail.com', password: 'Puddleshaker@123' },
    { name: 'Ishita', email: 'ishita@gmail.com', password: 'Puddleshaker@123' },
    { name: 'Makranti', email: 'makranti@gmail.com', password: 'Puddleshaker@123' },
    { name: 'Liesel', email: 'liesel@gmail.com', password: 'Puddleshaker@123' },
    { name: 'Emily', email: 'emily@email.com', password: 'Puddleshaker@123' },
  ];

  // Function to validate the email format
  function validateEmail(email) {
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  // Function to validate the password format (optional: you can add your own rules)
  function validatePassword(password) {
    // Example: Password should be at least 6 characters long
    return password.length >= 6;
  }

  $('#loginForm').submit(function (event) {

    event.preventDefault(); // Prevent form submitting empty form

    var email = $('#email').val();
    var password = $('#password').val();

    // Validate email and password fields
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    // Check if the entered email and password match any user in the array
    var authenticatedUser = users.find(function (user) {
      return user.email === email && user.password === password;
    });

    if (authenticatedUser) {
      // Redirect to index.html upon successful login
      window.location.href = '/Users/urvish/Documents/IMMID/Term 2/Web & Digital Prototyping/Assignment 3/Group2_Structuring_web final/index.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });

  //Add user name to index file for greetings
  $("#submit").click(function () {
    $("#title").append("users.val(1);");
  });

});




/*let data = {
  users: [
    {
      name: "Urvish"
      userRef: "urvishgajjar515@gmail.com",
      passRef: "Puddleshaker@123",
    },
    {
      name: "Arshdeep",
      userRef: "arshdeep@gmail.com",
      passRef: "Puddleshaker@123",
    }
  ],
}

//Authenticate user
function Verify() {
    var userRef = "urvishgajjar515@gmail.com";
    var passRef = "Puddleshaker@123";
    
    var user =  document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
    alert("Connexion")
    } else {
    alert("It's seem you make a mistake...")
    }
  };*/

function Toggle() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}