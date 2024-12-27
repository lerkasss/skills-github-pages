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
    const scrollSpeed = 1; // Плавное движение
    let scrollDirection = 0; // Направление прокрутки (0 - нет движения)
    let lastTime = 0; // Последнее время обновления

    function smoothScroll() {
        // Обновление позиции прокрутки с плавностью
        if (scrollDirection !== 0) {
            container.scrollLeft += scrollDirection * scrollSpeed;
        }
        requestAnimationFrame(smoothScroll);
    }

    reviewsSection.addEventListener("mousemove", (e) => {
        // Получаем позицию курсора относительно секции
        const { left, right, width } = reviewsSection.getBoundingClientRect();
        const cursorX = e.clientX - left;

        // Определяем направление прокрутки
        if (cursorX < width * 0.3) {
            // Курсор в левой части — скроллим влево
            scrollDirection = -1;
        } else if (cursorX > width * 0.7) {
            // Курсор в правой части — скроллим вправо
            scrollDirection = 1;
        } else {
            // Курсор в центре — останавливаем прокрутку
            scrollDirection = 0;
        }
    });
    requestAnimationFrame(smoothScroll);
});
