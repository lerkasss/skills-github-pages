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
const reviewsContainer = document.querySelector('.reviews-container');

if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        const { clientX } = e;
        const screenWidth = window.innerWidth;
        const scrollWidth = reviewsContainer.scrollWidth - reviewsContainer.clientWidth;

        const scrollPercentage = clientX / screenWidth;
        const targetScroll = scrollWidth * scrollPercentage;

        reviewsContainer.scrollTo({
            left: targetScroll,
            behavior: 'smooth',
        });
    });
} else {
    reviewsContainer.addEventListener('touchstart', (e) => {
        const startX = e.touches[0].clientX;

        reviewsContainer.addEventListener('touchmove', (moveEvent) => {
            const deltaX = moveEvent.touches[0].clientX - startX;
            reviewsContainer.scrollLeft -= deltaX;
        });
    });
}


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    alert("Thank you for contacting us! We'll get back to you shortly.");
    this.reset(); // Clear the form fields
});

