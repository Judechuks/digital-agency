// Toggling Effect
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

// Theme Effect
const blackBg = document.getElementById('blackbg');
const whiteBg = document.getElementById('whitebg');
const redBg = document.getElementById('redbg');

window.addEventListener('DOMContentLoaded', function(){
  whiteBg.classList.add('fa');
  whiteBg.classList.add('fa-check');
  whiteBg.style.borderColor = 'black';
  blackBg.style.borderColor = 'white';
  redBg.style.borderColor = 'white';
});
whiteBg.addEventListener('click', function(){
  whiteBg.style.borderColor = 'black';
  blackBg.style.borderColor = 'white';
  redBg.style.borderColor = 'white';
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
  whiteBg.classList.add('fa');
  whiteBg.classList.add('fa-check');

  blackBg.classList.remove('fa');
  blackBg.classList.remove('fa-check');
    
  redBg.classList.remove('fa');
  redBg.classList.remove('fa-check');
});
blackBg.addEventListener('click', function(){
    blackBg.style.borderColor = 'white';
    whiteBg.style.borderColor = 'black';
    redBg.style.borderColor = 'black';
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    blackBg.classList.add('fa');
    blackBg.classList.add('fa-check');

    whiteBg.classList.remove('fa');
    whiteBg.classList.remove('fa-check');
    
    redBg.classList.remove('fa');
    redBg.classList.remove('fa-check');
});
redBg.addEventListener('click', function(){
  redBg.style.borderColor = 'black';
  blackBg.style.borderColor = 'red';
  whiteBg.style.borderColor = 'red';
  document.body.style.backgroundColor = 'red';
  document.body.style.color = 'white';
  redBg.classList.add('fa');
  redBg.classList.add('fa-check');

  whiteBg.classList.remove('fa');
  whiteBg.classList.remove('fa-check');
    
  blackBg.classList.remove('fa');
  blackBg.classList.remove('fa-check');
});