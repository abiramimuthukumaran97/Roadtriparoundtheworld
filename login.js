function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Add your login validation logic here
    // For demonstration purposes, let's check if both fields are filled
    if (username !== "" && password !== "") {
        alert("Login successful!");
    } else {
        alert("Please enter both username and password.");
    }
}