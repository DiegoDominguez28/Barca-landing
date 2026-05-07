const navMenu = document.getElementById('navbarNav');
const navLinks = document.querySelectorAll('.nav-link');
const bsCollapse = new bootstrap.Collapse(navMenu, { toggle: false });
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) {
            bsCollapse.hide();
        }
    });
});