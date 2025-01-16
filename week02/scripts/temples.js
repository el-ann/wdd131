document.addEventListener('DOMContentLoaded', (event) => {
    const yearELement = document.getElementById('currentYear');
    const modifiedElement = document.getElementById('lastModified');
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    if (yearELement) {
        yearELement.textContent = currentYear;
    }

    if (modifiedElement) {
        modifiedElement.textContent = lastModified;
    }

    const menuButton = document.getElementById('menu-button');
    const navMenu = document.querySelector('nav-menu');

    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        menuButton.textContent = navMenu.classList.contains('open') ? 'X' : '☰';
    });
});