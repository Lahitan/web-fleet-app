//Calender format for pickup and dropoff dates
flatpickr('#pickup-date', {
  dateFormat: 'Y-m-d',
});

flatpickr('#dropoff-date', {
  dateFormat: 'Y-m-d',
});
// Function to handle the search button click
document.querySelector('#search-button').addEventListener('click', function () {
  const location = document.querySelector('#location').value;
  const pickupDate = document.querySelector('#pickup-date').value;
  const dropoffDate = document.querySelector('#dropoff-date').value;

  if (!location || !pickupDate || !dropoffDate) {
    alert('Please fill in all fields');
    return;
  }

  // Perform search or booking action
  console.log('Searching for cars in', location);
  console.log('Pickup date:', pickupDate);
  console.log('Dropoff date:', dropoffDate);
});

//Top rated cars card data
const topRatedCars = [
  {
    id: 1,
    image: '../assets/images/lexus.svg',
    name: 'Mercedes Benz',
    seater: '5 Seater',
    transition: 'Auto',
    speed: '6km/1-lt',
    price: 'Starting at N50,000/Day',
  },
  {
    id: 2,
    image: '../assets/images/tesla.svg',
    name: 'Tesla Model',
    seater: '4 Seater',
    transition: 'Manual',
    speed: '5km/1-lt',
    price: 'Starting at N50,000/Day',
  },
  {
    id: 3,
    image: '../assets/images/mercedes.svg',
    name: 'Lexus',
    seater: '5 Seater',
    transition: 'Auto',
    speed: '5.5km/1-lt',
    price: 'Starting at N50,000/Day',
  },
];

// Function to render top rated cars
function renderTopRatedCars() {
  const container = document.querySelector('#top-rated-cars');
  container.innerHTML = '';

  topRatedCars.forEach((car) => {
    const card = document.createElement('div');
    card.className =
      'bg-white rounded-lg shadow-md mb-10 min-h-[300px] md:min-h-[500px] flex flex-col justify-between gap-4 items-center p-10 hover:shadow-lg transition-shadow duration-300 ease-in-out';

    // Adding content to the card
    card.innerHTML = `
         
         <div class="w-full aspect-[4/3] overflow-hidden rounded flex items-center justify-center">
    <img src="${car.image}" alt="${car.name}" class="w-full h-full object-contain" />
  
    </div>
  

        <div class="mt-5 flex flex-col items-center">

          <h3 class="text-lg font-bold my-4">${car.name}</h3>

          <div class="flex items-center gap-6">


           <div class="flex items-center gap-2">
            <img src="../assets/images/seater.svg" alt="Seater" class=" w-4 h-4 md:w-6 md:h-6 inline-block" />
            <p class=" text-[12px] md:text-sm text-gray-600">${car.seater}</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="../assets/images/transition.svg" alt="Transition" class="w-4 h-4 md:w-6 md:h-6 inline-block" />
            <p class=" text-[12px] md:text-sm text-gray-600">${car.transition}</p>
          </div>
          <div class="flex items-center gap-2">
            <img src="../assets/images/speed.svg" alt="Speed" class="w-4 h-4 md:w-6 md:h-6 inline-block" />
            <p class=" text-[12px] md:text-sm text-gray-600">${car.speed}</p>
          </div>
          </div>
          <p class="text-accent my-6 font-semibold text-center ">${car.price}</p>
          
          <div class="flex items-center gap-2  font-inter font-thin mt-auto">
          <button class="bg-accent text-white py-2 px-4 rounded-md">Details</button>
          <button class="bg-primary text-white py-2 px-4 rounded-md">Book Now</button>
          </div>
         </div> 
        `;

    container.appendChild(card);
  });
}
renderTopRatedCars();

// Initialize the map

document.addEventListener('DOMContentLoaded', function () {
  const locations = {
    Lagos: [6.5244, 3.3792],
    Kano: [12.0022, 8.5919],
    Abuja: [9.0579, 7.4951],
    Warri: [5.5164, 5.7502],
    Akure: [7.2508, 5.2103],
    Calabar: [4.9589, 8.3229],
  };

  // Init map centered on Lagos
  const map = L.map('map').setView(locations.Lagos, 10);

  // Add OpenStreetMap Layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  // Default marker
  let marker = L.marker(locations.Lagos)
    .addTo(map)
    .bindPopup('Lagos')
    .openPopup();

  // Handle button click
  document.querySelectorAll('.state-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const state = btn.textContent.trim();
      if (locations[state]) {
        // Update map and marker
        map.setView(locations[state], 11);
        marker.setLatLng(locations[state]).bindPopup(state).openPopup();

        // First remove the active style from all buttons
        document.querySelectorAll('.state-btn').forEach((b) => {
          b.classList.remove('bg-primary', 'text-white');
          b.classList.add('bg-accent', 'text-white');
        });

        // Then add active style to the clicked button
        btn.classList.remove('bg-accen', 'text-white');
        btn.classList.add('bg-primary', 'text-white');
      }
    });
  });
});

//Mobile menu toggle

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuOpenIcon.classList.toggle('hidden');
  menuCloseIcon.classList.toggle('hidden');
});
