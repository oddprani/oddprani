document.addEventListener('DOMContentLoaded', function() {
    /* Toggle Icon Navbar */
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    /* Scroll Selection Active Link */
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', function() {
        sections.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            }
        });

        /* Sticky Navbar */
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    /* Remove Toggle Icon and navbar in One Click */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
});

/* Scroll Reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* Typed.js Initialization */
const typed = new Typed('.multiple-text', {
    strings: ['Freelance Editor', 'Youtuber', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
