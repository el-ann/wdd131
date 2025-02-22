document.addEventListener('DOMContentLoaded', function() {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").innerHTML = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;

    const menuButton = document.getElementById('menu');
    const navbar = document.getElementById('navbar');

    menuButton.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide the navbar
});

});