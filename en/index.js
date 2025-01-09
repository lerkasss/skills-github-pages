// Form submission with email sending (Google Apps Script)
document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission

  const form = new FormData(event.target);
  const formData = Object.fromEntries(form.entries());

  try {
    // Send data to Google Apps Script
    const response = await fetch('https://script.google.com/macros/s/AKfycbzA837y0koU9Pt97fUbSeFXk-egN2KmlKrBGtT2b_PdsOYLZNp3dQeDBtvRhuy52AHy/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();

    if (result.status === 'success') {
      alert('Message sent successfully!');
      this.reset(); // Clear the form fields after successful submission
    } else {
      alert('Error: ' + result.message);
    }
  } catch (error) {
    alert('An error occurred: ' + error.message);
  }
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
