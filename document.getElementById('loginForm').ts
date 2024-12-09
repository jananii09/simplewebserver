document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the values of the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple hardcoded credentials (for demonstration purposes only)
    const validUsername = 'user';
    const validPassword = 'password123';

    // Check if the entered username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to another page or handle the login success
        window.location.href = 'dashboard.html'; // Example of redirecting to a dashboard
    } else {
        // Show an error message if credentials are incorrect
        document.getElementById('errorMessage').style.display = 'block';
    }
});