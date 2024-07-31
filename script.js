// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');

  mobileMenu.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      navbar.classList.toggle('open');
  });
});