// Add a simple scroll effect for the navigation
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '10px 10%';
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.padding = '20px 10%';
        nav.style.background = 'white';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});