// Toggle dropdown for language switcher

console.log("The script is working!");

function toggleDropdown(event) {
    console.log("Dropdown toggled");
    event.preventDefault();
    const switcher = event.target.closest('.language-switcher');
    switcher.classList.toggle('active');
}

// Open modal
function openModal() {
    console.log("openModal working");
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    console.log("closeModal working");
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    console.log("Modal working");
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
//reviews
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".reviews-container");
    let startX = 0;
    let currentPage = 0;

    // Check if it's a mobile device
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Only enable swipe for mobile
    if (isMobile) {
        const pages = document.querySelectorAll(".reviews-page");
        const totalPages = pages.length;

        // Touchstart event
        container.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        // Touchmove event
        container.addEventListener("touchmove", (e) => {
            const x = e.touches[0].clientX;
            const diff = startX - x;

            if (diff > 50 && currentPage < totalPages - 1) {
                currentPage++;
                updatePage();
            }

            if (diff < -50 && currentPage > 0) {
                currentPage--;
                updatePage();
            }
        });

        function updatePage() {
            const offset = -currentPage * window.innerWidth;
            container.style.transform = `translateX(${offset}px)`;
        }
    }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    alert("Thank you for contacting us! We'll get back to you shortly.");
    this.reset(); // Clear the form fields
});

