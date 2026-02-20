// Open/Close Login Modal
function openLogin() {
    document.getElementById('login-modal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('login-modal').style.display = 'none';
}

// Open/Close Signup Modal
function openSignup() {
    document.getElementById('signup-modal').style.display = 'block';
}

function closeSignup() {
    document.getElementById('signup-modal').style.display = 'none';
}

// Switch between Login and Signup
function switchToSignup() {
    closeLogin();
    openSignup();
}

function switchToLogin() {
    closeSignup();
    openLogin();
}

// Handle Login Form Submit
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
        alert('Login successful! Welcome back to The Salad Bowl 🥗');
        closeLogin();
        event.target.reset();
    }
}

// Handle Signup Form Submit
function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Simple validation (replace with real registration)
    if (name && email && password) {
        alert('Account created successfully! Welcome to The Salad Bowl 🥗');
        closeSignup();
        event.target.reset();
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    
    if (event.target === loginModal) {
        closeLogin();
    }
    if (event.target === signupModal) {
        closeSignup();
    }
}