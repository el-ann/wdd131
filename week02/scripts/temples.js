// JavaScript for footer date
document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
    
    // Hamburger menu functionality
    const menuButton = document.getElementById('menu-button');
    const navLinks = document.querySelector('nav');
    
    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open');
        
        // Toggle the button text between ☰ and X
        if (menuButton.textContent === '☰') {
            menuButton.textContent = 'X';
        } else {
            menuButton.textContent = '☰';
        }
    });
});
