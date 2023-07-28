$(document).ready(function() {
    // Define the array for authentication
    var users = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
      // Add more users if needed
    ];
  
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // Prevent form submission
  
      var email = $('#email').val();
      var password = $('#password').val();
  
      // Check if the entered email and password match any user in the array
      var authenticatedUser = users.find(function(user) {
        return user.email === email && user.password === password;
      });
  
      if (authenticatedUser) {
        // Redirect to index.html upon successful login
        window.location.href = 'index.html';
      } else {
        alert('Invalid email or password. Please try again.');
      }
    });
  });
  