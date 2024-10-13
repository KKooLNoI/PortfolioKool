const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelectorAll('.navbar a');

// Toggle menu on mobile
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close menu when a link is clicked
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});


new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,


    
    pagination: {
      el: '.swiper-pagination',
    },
  
    
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


const cardLinks = document.querySelectorAll('.card-link');
const popups = document.querySelectorAll('.popup-overlay');
const closeButtons = document.querySelectorAll('.close-btn');


cardLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const popupId = link.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        popup.style.display = 'flex'; 
    });
});


closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.popup-overlay').style.display = 'none';
    });
});


window.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup-overlay')) {
        e.target.style.display = 'none';
    }
});





