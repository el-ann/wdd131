document.addEventListener('DOMContentLoaded', function() {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").innerHTML = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;
});
