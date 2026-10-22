// Theme Toggle functionality (Dark/Light mode switch mockup)
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = true;

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.style.setProperty('--bg-color', '#080c14');
        document.documentElement.style.setProperty('--card-bg', '#0f1624');
        document.documentElement.style.setProperty('--text-main', '#f8fafc');
        document.documentElement.style.setProperty('--text-muted', '#94a3b8');
        themeToggle.innerHTML = '<i class="fa-regular fa-sun"></i>';
    } else {
        document.documentElement.style.setProperty('--bg-color', '#f8fafc');
        document.documentElement.style.setProperty('--card-bg', '#ffffff');
        document.documentElement.style.setProperty('--text-main', '#0f1624');
        document.documentElement.style.setProperty('--text-muted', '#64748b');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Simple contact form alert behavior
const contactForm = document.getElementById('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! This is a demo form.');
        contactForm.reset();
    });
}

// Active navigation highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a:not(#theme-toggle)');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});