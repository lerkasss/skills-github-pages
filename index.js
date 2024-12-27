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

    // Настройка скорости прокрутки
    const scrollSpeed = 7; // Плавное движение
    

    reviewsSection.addEventListener("mousemove", (e) => {
        // Очищаем предыдущую задержку, чтобы избежать излишнего движения
        if (scrollTimeout) clearTimeout(scrollTimeout);

        const { left, right, width } = reviewsSection.getBoundingClientRect();
        const cursorX = e.clientX - left; // Позиция курсора относительно секции

        // Определение направления и скорости прокрутки
        if (cursorX < width * 0.3) {
            // Курсор в левой части
            scrollTimeout = setTimeout(() => {
                container.scrollLeft -= scrollSpeed;
            }, 15); // Задержка для плавности
        } else if (cursorX > width * 0.7) {
            // Курсор в правой части
            scrollTimeout = setTimeout(() => {
                container.scrollLeft += scrollSpeed;
            }, 15); // Задержка для плавности
        }
    });
});

