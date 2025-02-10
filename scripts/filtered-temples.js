// Get current year and last modified date for footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;

// Toggle navigation menu on smaller screens
const mainnav = document.querySelector('.navbar');
const hambuttom = document.querySelector('#menu');

hambuttom.addEventListener('click', () => {
  mainnav.classList.toggle('open');
  hambuttom.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005-08-07",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015-06-07",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020-05-02",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974-11-19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986-01-10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Atlanta Georgia Temple",
    location: "Sandy Springs, Georgia",
    dedicated: "1983-06-04",
    area: 34500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg"
  },
  {
    templeName: "Vancouver British Columbia Temple",
    location: "Langley, British Columbia",
    dedicated: "2010-05-02",
    area: 28165,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/vancouver-british-columbia-temple/vancouver-british-columbia-temple-13064-main.jpg"
  },
  {
    templeName: "Vernal Utah Temple",
    location: "Vernal, Utah",
    dedicated: "1997-11-04",
    area: 38771,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/vernal-utah-temple/vernal-utah-temple-40521-main.jpg"
  },
  {
    templeName: "Veracruz Mexico Temple",
    location: "Boca del Rio, Veracruz",
    dedicated: "1999-05-29",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/veracruz-mexico-temple/veracruz-mexico-temple-1951-main.jpg"
  }
];

// Function to create and display temple cards
function displayTemples(filteredTemples) {
  const templeCardsContainer = document.getElementById('temple-cards-container');
  templeCardsContainer.innerHTML = '';
  filteredTemples.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'figure-card';
    card.innerHTML = `
      <figure>
        <div class="caption">
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </div>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="200" height="100">
      </figure>
    `;
    templeCardsContainer.appendChild(card);
  });
}

// Filter function
function filterTemples(condition) {
  return temples.filter(condition);
}

// Event listeners for filtering
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('home').addEventListener('click', () => displayTemples(temples));
  document.getElementById('old').addEventListener('click', () => displayTemples(filterTemples(temple => new Date(temple.dedicated).getFullYear() < 1900)));
  document.getElementById('new').addEventListener('click', () => displayTemples(filterTemples(temple => new Date(temple.dedicated).getFullYear() > 2000)));
  document.getElementById('large').addEventListener('click', () => displayTemples(filterTemples(temple => temple.area > 90000)));
  document.getElementById('small').addEventListener('click', () => displayTemples(filterTemples(temple => temple.area < 10000)));

  // Display all temples on load
  displayTemples(temples);
});
