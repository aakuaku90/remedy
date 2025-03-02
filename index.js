// Emails
emailjs.init('mOR26TuZNsb4w1LIU'); // Replace with your EmailJS User ID

document.getElementById('send-email').addEventListener('click', function () {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const institution = document.getElementById('institution');
  const message = document.getElementById('message');
  const permission = document.getElementById('permission');

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

  const templateParams = {
    name: name.value,
    email: email.value,
    institution: institution.value,
    message: message.value,
    permission: permission.value,
  };

  emailjs
    .send('service_upqksmh', 'template_r7mcw9f', templateParams)
    .then(function (response) {
      alert('Message sent successfully!');
      // Clear the form fields
      name.value = '';
      email.value = '';
      institution.value = '';
      message.value = '';
      permission.value = '';
    })
    .catch(function (error) {
      alert('Failed to send message. Please try again.');
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
