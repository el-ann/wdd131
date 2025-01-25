const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified; 
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;

const mainnav = document.querySelector('.navbar')
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
  mainnav.classList.toggle('open');
  hambuttom.classList.toggle('open');
})