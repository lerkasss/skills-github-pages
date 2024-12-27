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
    const reviewsSection = document.querySelector("#reviews");

    // Speed of scroll (adjust as needed)
    const scrollSpeed = 2;

    reviewsSection.addEventListener("mousemove", (e) => {
        const { left, right, width } = reviewsSection.getBoundingClientRect();
        const cursorX = e.clientX - left; // Cursor position relative to section

        // Determine scroll direction and speed
        if (cursorX < width * 0.3) {
            // Cursor in the left part
            container.scrollLeft -= scrollSpeed;
        } else if (cursorX > width * 0.7) {
            // Cursor in the right part
            container.scrollLeft += scrollSpeed;
        }
    });
});

