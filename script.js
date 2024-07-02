// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const dropdown = item.querySelector('.dropdown');
            if (dropdown) {
                dropdown.classList.toggle('active');
            }
        });
    });
});
