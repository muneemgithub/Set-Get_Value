document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const useremail = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (useremail && password ) {
        localStorage.setItem('username', username);
        localStorage.setItem('useremail', useremail);
        localStorage.setItem('password', password);
        alert("Registration successful!");
        document.getElementById('signup-message').style.color = 'white';
        document.getElementById('signup-message').textContent = 'Registration successful!';
    } else {
        document.getElementById('signup-message').style.color = 'red';
        document.getElementById('signup-message').textContent = 'Please fill in all fields.';
    }
});

// Login form handling
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        document.getElementById('login-message').style.color = 'green';
        document.getElementById('login-message').textContent = 'Login successful!';
    } else {
        document.getElementById('login-message').style.color = 'red';
        document.getElementById('login-message').textContent = 'Invalid username or password.';
        alert("Invalid username or password.");
    }
});