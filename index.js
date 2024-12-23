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
