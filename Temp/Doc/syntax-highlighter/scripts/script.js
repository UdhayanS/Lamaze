emailjs.init('oQatu7l0SDh1_8OKs'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this; // Reference to the form element

    // Replace 'service_sfvli6h', 'template_ttemf9t' with your actual EmailJS service and template IDs
    emailjs.sendForm('service_sfvli6h', 'template_ttemf9t', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
            form.reset(); // Reset the form after successful submission
        }, function(error) {
            console.log('FAILED...', error);
            alert('Email sending failed. Please try again.');
        });
});