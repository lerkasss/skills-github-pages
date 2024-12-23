// Toggle dropdown for language switcher
function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('show');
}

// Open modal
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
