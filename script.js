// script.js
// Small interactive bits: year, theme toggle, simple smooth scrolling

// set current year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const href = a.getAttribute('href');
        if (href.length > 1) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// theme toggle (light/dark styles simple switch)
const themeToggle = document.getElementById('themeToggle');
let light = false;
themeToggle.addEventListener('click', () => {
    light = !light;
    if (light) {
        document.documentElement.style.setProperty('--bg', '#ffffff');
        document.documentElement.style.setProperty('--card', '#f8fafc');
        document.documentElement.style.setProperty('--text', '#0b1220');
        document.documentElement.style.setProperty('--muted', '#53677a');
        themeToggle.textContent = '🌞';
        document.body.style.background = '#f6fbff';
    } else {
        // reset to default dark theme (matches CSS root)
        document.documentElement.style.removeProperty('--bg');
        document.documentElement.style.removeProperty('--card');
        document.documentElement.style.removeProperty('--text');
        document.documentElement.style.removeProperty('--muted');
        themeToggle.textContent = '🌙';
        document.body.style.background = '';
    }
});
