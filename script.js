// Simple smooth scroll functionality for the navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Smooth scroll to the top of the page
document.querySelector('.back-to-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Smooth scroll to the contact section
document.querySelector('.contact-link').addEventListener('click', function () {
    const contactSection = document.querySelector('#contact');    
    contactSection.scrollIntoView({
        behavior: 'smooth'
    });
});           