// Add event listener to the contact form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate input fields
    if (!name || !email || !phone || !message) {
        alert("All fields are required. Please fill out the form completely.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!validatePhone(phone)) {
        alert("Please enter a valid phone number (e.g., +1234567890).");
        return;
    }

    // Success message
    alert("Thank you for reaching out to us! We will get back to you soon.");

    // Reset the form
    this.reset();
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Phone number validation function
function validatePhone(phone) {
    const regex = /^\+?[0-9]{7,15}$/; // Allows international format with "+" and 7-15 digits
    return regex.test(phone);
}