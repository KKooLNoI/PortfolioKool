new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    }
  });

// Select all buttons with the class 'card-link'
const cardLinks = document.querySelectorAll('.card-link');
const popups = document.querySelectorAll('.popup-overlay');
const closeButtons = document.querySelectorAll('.close-btn');

// Loop through each card link and add an event listener
cardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const popupId = link.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'flex'; // Show the specific popup
    });
});

// Add event listeners to close the popups
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.popup-overlay').style.display = 'none';
    });
});

// Close the popup if the user clicks outside the popup content
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-overlay')) {
        e.target.style.display = 'none';
    }
});

