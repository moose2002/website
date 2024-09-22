// Button click alert
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button was clicked!');
});

// Change text when the button is clicked
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('aboutText').textContent = 'The text has been changed!';
});

// Fade-in effect for the home section
window.addEventListener('load', function() {
    const homeSection = document.getElementById('home');
    homeSection.classList.add('fade-in');
    setTimeout(() => homeSection.classList.add('show'), 100); // Small delay to allow the transition
});

// Simple form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        document.getElementById('formMessage').textContent = 'Thank you for your submission!';
        document.getElementById('formMessage').style.color = 'green';
    } else {
        document.getElementById('formMessage').text
