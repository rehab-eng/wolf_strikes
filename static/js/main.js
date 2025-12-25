/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
}
window.addEventListener('scroll', scrollHeader);

/*=============== DARK/LIGHT THEME ===============*/
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const setTheme = (theme) => {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.classList.toggle('fa-sun', theme === 'light');
    themeToggle.classList.toggle('fa-moon', theme === 'dark');
};

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
});

/*=============== TYPING EFFECT ===============*/
document.addEventListener('DOMContentLoaded', () => {
    if (typeof Typed !== 'undefined') {
        if (document.getElementById('typing-headline')) {
            new Typed('#typing-headline', {
                strings: ['Wolf Strikes'],
                typeSpeed: 100,
                backSpeed: 50,
                loop: false,
                showCursor: true,
                cursorChar: '_',
            });
        }
        if (document.getElementById('typing-title')) {
            const titleElement = document.getElementById('typing-title');
            const titleText = titleElement.getAttribute('data-text') || 'Our Page';
            new Typed('#typing-title', {
                strings: [titleText],
                typeSpeed: 70,
                backSpeed: 50,
                loop: false,
                showCursor: false,
            });
        }
    }
});
