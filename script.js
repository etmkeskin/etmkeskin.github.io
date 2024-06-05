// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can add your form submission logic, e.g., sending an email, saving to a database, etc.
    alert('Your message has been sent!'); // Replace with your own logic
    form.reset(); // Reset the form after submission
});
