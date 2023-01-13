const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

const twitterLink = document.getElementById('twitter');
const instaLink = document.getElementById('instagram');
const linkedinLink = document.getElementById('linkedin');
const githubLink = document.getElementById('github');

twitterLink.href = 'https://twitter.com/JkSharat';
instaLink.href = 'https://www.instagram.com/sharat_katwa/';
linkedinLink.href = 'https://www.linkedin.com/in/sharat-katwa/';
githubLink.href = 'https://github.com/sharatkatwa';

twitterLink.target = '_blank';
instaLink.target = '_blank';
linkedinLink.target = '_blank';
githubLink.target = '_blank';

twitterLink.rel = 'noopener noreferrer';
instaLink.rel = 'noopener noreferrer';
linkedinLink.rel = 'noopener noreferrer';
githubLink.rel = 'noopener noreferrer';

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach((item) => {
      item.classList.add('open');
    });

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach((item) => {
      item.classList.remove('open');
    });
    showMenu = false;
  }
}
