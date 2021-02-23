const navToggle = document.getElementById('navi-toggle');
const navLinks = document.querySelectorAll('.navigation__link');

const closeNav = () => {
    navToggle.checked = false;
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeNav();
    });
});

const popup = document.querySelector('.popup');

popup.addEventListener('click', (e) => {
    if (e.target.id === 'popup') {
        window.location.href = '#section-tours';
    } else return;
});