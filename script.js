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
});
