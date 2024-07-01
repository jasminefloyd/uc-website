document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll for nav links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Popup functionality
    const viewMenuButton = document.getElementById('view-menu-button');
    const menuPopup = document.getElementById('menu-popup');
    const closeButton = document.querySelector('.close-button');

    viewMenuButton.addEventListener('click', function (e) {
        e.preventDefault();
        menuPopup.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        menuPopup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === menuPopup) {
            menuPopup.style.display = 'none';
        }
    });

    // Carousel functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-inner img');
    const totalSlides = slides.length;

    function showSlides(n) {
        if (n >= totalSlides) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = n;
        }

        slides.forEach((slide, index) => {
            slide.style.display = index === slideIndex ? 'block' : 'none';
        });
    }

    function plusSlides(n) {
        showSlides(slideIndex + n);
    }

    document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
    document.querySelector('.next').addEventListener('click', () => plusSlides(1));

    // Initialize first slide
    showSlides(slideIndex);
});
