document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            document.getElementById('formMessage').textContent = "Thank you for contacting us, " + templateParams.name + "!";
            document.getElementById('formMessage').style.color = "green";
            document.getElementById('contactForm').reset();
        }, function(error) {
            document.getElementById('formMessage').textContent = "An error occurred. Please try again.";
            document.getElementById('formMessage').style.color = "red";
        });
});
