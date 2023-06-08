
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const menuLinks = document.querySelectorAll('.li');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
  
menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});