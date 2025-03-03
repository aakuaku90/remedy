document.addEventListener('DOMContentLoaded', function () {
  // Initialize EmailJS with your Public Key
  emailjs.init('ODaZ-Vr4tir5nIP9p'); // Ensure this matches your EmailJS Public Key

  document.getElementById('send-email').addEventListener('click', function () {
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const institution = document.getElementById('institution');
    const message = document.getElementById('message');
    const permission = document.getElementById('permission');

    // Validate all fields
    if (
      !name.value ||
      !email.value ||
      !institution.value ||
      !message.value ||
      !permission.value
    ) {
      alert('All fields are required.');
      return;
    }

    // Mapping of institution values to human-readable text
    const institutionMap = {
      'sleep-coach-looking-for-clients':
        'I’m a sleep coach looking to connect with more clients',
      'looking-for-sleep-coach': 'I’m looking for a sleep coach',
      other: 'Other',
    };

    // Prepare EmailJS template parameters
    const templateParams = {
      name: name.value,
      email: email.value,
      institution: institutionMap[institution.value] || institution.value,
      message: message.value,
      permission: permission.value,
    };

    console.log('Sending email with params:', templateParams); // Debugging

    // Send email via EmailJS
    emailjs
      .send('service_912i7z8', 'template_2xiax8z', templateParams)
      .then(function (response) {
        console.log('Email sent successfully:', response);
        alert('Message sent successfully!');
        // Reset the entire form
        document.getElementById('contact-form').reset();
      })
      .catch(function (error) {
        console.error('Failed to send message:', error);
        alert('Failed to send message. Please try again.');
      });
  });
});

// JavaScript to handle text rotation every 5 seconds
const slides = document.querySelectorAll('.text-slide');
let currentSlide = 0;

function showNextSlide() {
  // Hide all slides
  slides.forEach((slide) => slide.classList.remove('active'));

  // Show the next slide
  slides[currentSlide].classList.add('active');

  // Increment counter and loop back if needed
  currentSlide = (currentSlide + 1) % slides.length;
}

// Initially show the first slide
slides[currentSlide].classList.add('active');

// Rotate every 5 seconds (5000ms)
setInterval(showNextSlide, 10000);

document.addEventListener('DOMContentLoaded', function () {
  // Get the "About Us" link
  const aboutUsLink = document.getElementById('about-us-link');

  // Get the target section
  const aboutSection = document.querySelector('.second-page');

  // Add click event listener to the "About Us" link
  aboutUsLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// footer year
document.getElementById('current-year').textContent = new Date().getFullYear();
