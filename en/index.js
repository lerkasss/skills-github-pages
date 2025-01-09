// Add your EmailJS service, template, and user ID here
const serviceID = 'service_wrfi07t'; // Replace with your EmailJS service ID
const templateID = 'template_kewbrfz'; // Replace with your EmailJS template ID
const userID = 'pBVvmCp2qljtiqkI1'; // Replace with your EmailJS user ID

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const form = new FormData(event.target);
  const formData = Object.fromEntries(form.entries());

  // Send email via EmailJS
  emailjs.send(serviceID, templateID, formData, userID)
    .then(function(response) {
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset(); // Clear the form fields
    }, function(error) {
      alert('Error: ' + error.text);
    });
});



// Toggle dropdown for language switcher
console.log("The script is working!");

function toggleDropdown(event) {
  event.preventDefault(); // Prevent default behavior
  const dropdown = document.getElementById('languageDropdown');
  toggleVisibility(dropdown, event.target);
}

// Toggle the mobile menu visibility when burger icon is clicked
document.querySelector('.burger-menu').addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  // Toggle active class on both elements
  burgerMenu.classList.toggle('active');
  mobileMenu.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
  const dropdown = document.getElementById('languageDropdown');
  const switcher = document.querySelector('.language-switcher');
  if (!switcher.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});



// Reviews section scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".reviews-container");
  const reviewsSection = document.querySelector("#reviews");

  const maxScrollSpeed = 7; // Maximum scroll speed (adjust as needed)
  let scrollDirection = 0; // Direction of scroll (-1 for left, 1 for right)
  let lastTime = 0; // Time tracking for smooth animation

  // Smooth scrolling function
  function smoothScroll() {
    const currentTime = Date.now();
    const deltaTime = currentTime - lastTime;
    const speed = Math.min(maxScrollSpeed, deltaTime / 10); // Control scroll speed

    if (scrollDirection !== 0) {
      container.scrollLeft += scrollDirection * speed;
    }
    lastTime = currentTime;

    // Call the function on the next frame
    requestAnimationFrame(smoothScroll);
  }

  // Mouse move listener to track cursor position
  reviewsSection.addEventListener("mousemove", (e) => {
    const { left, width } = reviewsSection.getBoundingClientRect();
    const cursorX = e.clientX - left;
    const centerX = width / 2;

    // Calculate scroll direction based on cursor position
    if (cursorX < centerX * 0.3) {
      scrollDirection = -1; // Scroll left
    } else if (cursorX > centerX * 1.7) {
      scrollDirection = 1; // Scroll right
    } else {
      scrollDirection = 0; // No scroll
    }
  });

  // Start the smooth scrolling process
  requestAnimationFrame(smoothScroll);
});


// Optional: Close the mobile menu if a link is clicked
document.querySelectorAll('.mobile-menu a').forEach(item => {
  item.addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.remove('active');
  });
});
