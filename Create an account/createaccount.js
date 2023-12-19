function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('errorMessage');

    // Perform simple validation (you should do more secure validation in a real-world scenario)
    if (username === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match. Please try again.';
        return;
    }
    // Store the registration data (you should handle this on the server side in a real-world scenario)
    // For demonstration purposes, we're just showing an alert
    alert('Registration successful!'); 
}