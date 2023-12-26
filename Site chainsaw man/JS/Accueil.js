document.addEventListener("DOMContentLoaded", function () {
    var burgerMenu = document.querySelector('.burger-menu');
    var nav = document.querySelector('nav');

    burgerMenu.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});

function toggleDarkMode() {
    var body = document.body;
    var header = document.querySelector('header');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode-header');

    var isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}
