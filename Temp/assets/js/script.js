emailjs.init('oQatu7l0SDh1_8OKs'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this; // Reference to the form element

    // Replace 'service_sfvli6h', 'template_ttemf9t' with your actual EmailJS service and template IDs
    emailjs.sendForm('service_sfvli6h', 'template_ttemf9t', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         
            form.reset(); // Reset the form after successful submission
        }, function(error) {
            console.log('FAILED...', error);
            alert('Email sending failed. Please try again.');
        });
});
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = this; // Reference to the form element

    // Replace 'service_sfvli6h', 'template_ttemf9t' with your actual EmailJS service and template IDs
    emailjs.sendForm('service_sfvli6h', 'template_pw0o46c', form)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
            form.reset(); // Reset the form after successful submission
        }, function(error) {
            console.log('FAILED...', error);
            alert('Email sending failed. Please try again.');
        });
});

function validate(){
    var text = document.getElementById('mail').value;
    console.log('Input Value:', text);
    var regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log('Regex Test Result:', regx.test(text));
    if(text==''){
        document.getElementById('text2').style.visibility = 'hidden';

    }
    else{

        if(regx.test(text)){
        document.getElementById('text2').innerHTML = "Valid";
        document.getElementById('text2').style.visibility = 'visible';
        document.getElementById('text2').style.color = 'green';
    } else {
        document.getElementById('text2').innerHTML = "Invalid";
        document.getElementById('text2').style.visibility = 'visible';
        document.getElementById('text2').style.color = 'red';
    }
    }
}
