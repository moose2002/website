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

    // Check if all fields are filled
    if (!firstName || !lastName || !email || !phone || !city || !state || !zip || !products || !hear || !project) {
        document.getElementById('formMessage').textContent = 'Please fill out all fields.';
        document.getElementById('formMessage').style.color = 'red';
        return;
    }

    // Send email using mailto
    const subject = `New Contact from ${firstName} ${lastName}`;
    const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city}\nState: ${state}\nZip Code: ${zip}\nProducts Interested In: ${products}\nHeard About Us From: ${hear}\nProject Details: ${project}`;

    const mailtoLink = `abdelmaguidmostafa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // Show success message
    document.getElementById('formMessage').textContent = 'Thank you for your submission!';
    document.getElementById('formMessage').style.color = 'green';
});
