function toggleDropdown(event) {
    event.preventDefault(); // Prevent the default link behavior
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
}

// Close dropdown when clicking outside
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('languageDropdown');
    const switcher = document.querySelector('.language-switcher');
    if (!switcher.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});
