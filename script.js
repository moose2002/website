// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const firstName = document.getElementById('first').value;
    const lastName = document.getElementById('last').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const products = document.getElementById('products').value;
    const hear = document.getElementById('hear').value;
    const project = document.getElementById('project').value;

    // Ensure the form fields are filled
    if (!firstName || !lastName || !email || !phone || !city || !state || !zip || !products || !hear || !project) {
        document.getElementById('formMessage').textContent = 'Please fill out all required fields.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Google Apps Script deployment URL (Replace with your URL)
    const scriptURL = 'https://script.google.com/a/macros/umich.edu/s/AKfycbwA1st0IHUFvB7ANmbB5UWz4nefd31s9xLcr5r_eAN-CP-eU0qGzu0eRHkNxMeIFETm/exec';

    // Create a FormData object
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zip', zip);
    formData.append('products', products);
    formData.append('hear', hear);
    formData.append('project', project);

    // Send the form data to Google Sheets
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => response.text())
        .then(result => {
            console.log('Success:', result);
            document.getElementById('formMessage').textContent = 'Form submitted successfully!';
            document.getElementById('formMessage').style.color = 'green';
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('formMessage').textContent = 'Form submission failed.';
            document.getElementById('formMessage').style.color = 'red';
        });
});


// Auto-scrolling between sections every 5 seconds
let currentSection = 1;
// Auto-scroll the slideshow every 5 seconds
let scrollContainer = document.querySelector('.slideshow-container');
let scrollAmount = 0;
const scrollInterval = setInterval(() => {
    scrollAmount += window.innerWidth; // Scroll by the width of the viewport
    if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0; // Reset scroll to the start
    }
    scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}, 5000); // Adjust the delay (5000ms = 5 seconds)

