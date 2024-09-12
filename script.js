// Handle reservation button click
document.querySelector('.reserve-btn')?.addEventListener('click', function() {
    alert('Your spot has been reserved!');
});

const slides = [
    {
      number: "01 / 10",
      name: "Pangong Lake",
      subtext: "High altitude lake",
      image: "./assets/pang4.jpg",
      description: "A stunning high-altitude lake located at an elevation of 4,350 meters. Pangong Lake is known for its crystal-clear blue waters that change colors throughout the day. It spans India and China, with 60% of the lake in China.",
      climate: "Cold desert climate. Summers are mild, with daytime temperatures around 5°C to 20°C. Winters are harsh, with temperatures dropping as low as -25°C.",
      bestTime: "Best Time to Visit: May to September."
    },
    {
      number: "02 / 10",
      name: "Leh Palace",
      subtext: "Historic Site",
      image: "./assets/palace.jpeg",
      description: "The Leh Palace is a former royal palace overlooking the city of Leh in Ladakh, India. Built in the 17th century, it offers stunning views of the Leh town and the surrounding mountain ranges.",
      climate: "Cool summers with daytime temperatures between 10°C and 25°C. Winters can be freezing with temperatures going below -10°C.",
      bestTime: "Best Time to Visit: April to June."
    },
    {
      number: "03 / 10",
      name: "Magnetic Hill",
      subtext: "Optical Illusion Hill",
      image: "./assets/mag.png",
      description: "A gravity hill, also called Magnetic Hill, where the layout of the surrounding land produces an optical illusion, making a slight downhill slope appear like an uphill slope.",
      climate: "Daytime temperatures are cool in summer between 15°C and 25°C, while winters can be extremely cold.",
      bestTime: "Best Time to Visit: May to October."
    },
    {
      number: "04 / 10",
      name: "Nubra Valley",
      subtext: "Cold Desert",
      image: "./assets/nubra.jpg",
      description: "Nubra Valley, located to the northeast of Ladakh, is known for its breathtaking views, sand dunes, Bactrian camels, and the Shyok and Nubra rivers.",
      climate: "Summers are mild with temperatures between 8°C and 20°C. Winters can get extremely cold.",
      bestTime: "Best Time to Visit: June to August."
    },
    {
      number: "05 / 10",
      name: "Shanti Stupa",
      subtext: "Buddhist Monument",
      image: "./assets/shanti.jpg",
      description: "Shanti Stupa is a white-domed Buddhist stupa located on a hilltop in Leh. It provides panoramic views of the surrounding mountain ranges and the Leh town.",
      climate: "Summers are pleasant, with temperatures between 10°C and 25°C. Winters are cold, with temperatures dropping below freezing.",
      bestTime: "Best Time to Visit: May to September."
    },
    {
      number: "06 / 10",
      name: "Thiksey Monastery",
      subtext: "Buddhist Monastery",
      image: "./assets/mona.jpg",
      description: "Thiksey Monastery is one of the largest and most architecturally significant monasteries in Ladakh. It is situated at an altitude of 3,600 meters in Thiksey village.",
      climate: "Mild summers with temperatures between 10°C and 20°C. Winters can be freezing.",
      bestTime: "Best Time to Visit: May to October."
    },
    {
      number: "07 / 10",
      name: "Hemis Monastery",
      subtext: "Largest Monastery in Ladakh",
      image: "./assets/hemis.jpg",
      description: "Hemis Monastery is the largest and richest monastery in Ladakh, known for its annual Hemis festival, celebrating the birth of Guru Padmasambhava.",
      climate: "Summers are mild, with temperatures between 10°C and 20°C. Winters are cold, with temperatures dropping below freezing.",
      bestTime: "Best Time to Visit: May to October."
    },
    {
      number: "08 / 10",
      name: "Tso Moriri Lake",
      subtext: "High Altitude Lake",
      image: "./assets/tso.jpg",
      description: "Tso Moriri Lake is a beautiful high-altitude lake located in the Changthang region of Ladakh. It offers pristine blue waters and is a paradise for bird watchers.",
      climate: "Summers are cool, with temperatures between 5°C and 20°C. Winters are extremely cold.",
      bestTime: "Best Time to Visit: June to August."
    },
    {
      number: "09 / 10",
      name: "Zanskar Valley",
      subtext: "Remote Mountain Valley",
      image: "./assets/zan.jpg",
      description: "Zanskar Valley is a remote, semi-arid region with stunning mountain views, rivers, and trekking opportunities. It’s ideal for those seeking solitude and adventure.",
      climate: "Summers are mild, with temperatures around 15°C. Winters are severe, with temperatures dropping to -30°C.",
      bestTime: "Best Time to Visit: June to September."
    },
    {
      number: "10 / 10",
      name: "Khardung La Pass",
      subtext: "Highest Motorable Road",
      image: "./assets/kar.png",
      description: "Khardung La is one of the highest motorable roads in the world, located at an altitude of 5,359 meters. It offers breathtaking views of the mountains and the valleys below.",
      climate: "Temperatures in summer range from 5°C to 15°C. Winters are harsh with heavy snowfall.",
      bestTime: "Best Time to Visit: May to September."
    }
  ];
  
  let currentIndex = 0;
  let slideInterval; // Variable to store the interval
  
  function updateContent(index) {
    const locationNumber = document.querySelector('.location-number');
    const locationName = document.querySelector('.loc-left h2');
    const locationSubtext = document.querySelector('.subtext');
    const locationImage = document.querySelector('.slide img');
    const description = document.querySelector('.info-section p:nth-child(2)');
    const climate = document.querySelector('.info-section p:nth-child(3)');
    const bestTime = document.querySelector('.info-section p:nth-child(4)');
  
    locationNumber.textContent = slides[index].number;
    locationName.textContent = slides[index].name;
    locationSubtext.textContent = slides[index].subtext;
    locationImage.src = slides[index].image;
    description.textContent = slides[index].description;
    climate.textContent = slides[index].climate;
    bestTime.textContent = slides[index].bestTime;
  }
  
  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateContent(currentIndex);
  }
  
  function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateContent(currentIndex);
  }
  
  // Automatically move to the next slide
  function startAutoSlide() {
    slideInterval = setInterval(showNextSlide, 3000); // 3000 ms = 3 seconds
  }
  
  // Stop auto sliding (when the user hovers)
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }
  
  // Event listeners for manual controls
  document.querySelector('.next').addEventListener('click', showNextSlide);
  document.querySelector('.prev').addEventListener('click', showPreviousSlide);
  
  // Start the automatic slideshow on page load
  startAutoSlide();
  
  // Pause auto-sliding when hovering over the slide container
  document.querySelector('.slide-container').addEventListener('mouseenter', stopAutoSlide);
  document.querySelector('.slide-container').addEventListener('mouseleave', startAutoSlide);
  
  // Initial content setup
  updateContent(currentIndex);
  
function showDay(day) {
    const itineraryDetails = document.getElementById('itinerary-details');
    let details = '';

    switch (day) {
        case 1:
            details = `
                <h2>Day 1: Arrival in Leh</h2>
                <p><strong>Stay:</strong> Leh</p>
                <p><strong>Activities:</strong></p>
                <ul>
                    <li>Arrive in Leh, transfer to your hotel.</li>
                    <li>Relax, drink water, and get acclimatized to the altitude.</li>
                    <li>Light visit to Shanti Stupa in the evening for sunset.</li>
                </ul>
            `;
            break;
        case 2:
            details = `
                <h2>Day 2: Leh Local Sightseeing</h2>
                <p><strong>Stay:</strong> Leh</p>
                <p><strong>Activities:</strong></p>
                <ul>
                    <li>Visit Leh Palace in the morning.</li>
                    <li>Hall of Fame (war museum), Gurudwara Pathar Sahib, and Magnetic Hill.</li>
                    <li>Sangam for rafting or enjoy the river views.</li>
                </ul>
            `;
            break;
        case 3:
            details = `
                <h2>Day 3: Leh to Nubra Valley</h2>
                <p><strong>Stay:</strong> Diskit or Hunder</p>
                <p><strong>Activities:</strong></p>
                <ul>
                    <li>Cross Khardung La Pass.</li>
                    <li>Reach Nubra Valley by noon.</li>
                    <li>Explore Diskit Monastery and visit Hunder for camel rides.</li>
                </ul>
            `;
            break;
        case 4:
            details = `
                <h2>Day 4: Nubra Valley to Pangong Lake</h2>
                <p><strong>Stay:</strong> Pangong Lake Camps</p>
                <p><strong>Activities:</strong></p>
                <ul>
                    <li>Drive to Pangong Lake in the morning.</li>
                    <li>Witness the stunning turquoise lake.</li>
                    <li>Relax and enjoy the evening at the lake.</li>
                </ul>
            `;
            break;
        case 5:
            details = `
                <h2>Day 5: Pangong Lake to Leh</h2>
                <p><strong>Stay:</strong> Leh</p>
                <p><strong>Activities:</strong></p>
                <ul>
                    <li>Drive back to Leh via Chang La Pass.</li>
                    <li>Visit Shey Palace and Thiksey Monastery.</li>
                    <li>Evening stroll in Leh Market for souvenirs.</li>
                </ul>
            `;
            break;
        case 6:
            details = `
                <h2>Day 6: Day Trip to Tso Moriri</h2>
                <p><strong>Stay:</strong> Tso Moriri or Leh</p>
                <p><strong>Activities:</strong></p>
                <ul>
                    <li>Visit Tso Moriri Lake for a serene experience.</li>
                    <li>Enjoy the pristine surroundings.</li>
                </ul>
            `;
            break;
        case 7:
            details = `
                <h2>Day 7: Departure from Leh</h2>
                <p><strong>Stay:</strong> N/A</p>
                <p><strong>Activities:</strong></p>
                <ul>
                    <li>Relax in Leh depending on your flight schedule.</li>
                    <li>Departure via Leh airport.</li>
                </ul>
            `;
            break;
        default:
            details = '<p>Select a day to see the details.</p>';
    }

    itineraryDetails.innerHTML = details;
}

function toggleDetails(id) {
    var detailsSection = document.getElementById(id);
    
    // Toggle visibility of the details section
    if (detailsSection.style.display === "none" || detailsSection.style.display === "") {
        detailsSection.style.display = "block";
    } else {
        detailsSection.style.display = "none";
    }
}