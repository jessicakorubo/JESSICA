// To reveal elements on scroll

var aboutImage = document.querySelector('.aboutImage');
var aboutText = document.querySelector('aboutText');
var sites = document.querySelector('.sites');
const seeProjects = document.querySelector('a.learnMore')
const galleryContainer = document.querySelector('.galleryContainer');
const hamburger = document.querySelector('.mobile_hamburger')
const navbar = document.querySelector('.navbar');
const close = document.querySelector('.close');
const navLink = navbar.querySelectorAll('li');

close.addEventListener('click', ()=>{
    navbar.classList.add('noDisplay');
    navbar.classList.remove('nav_active');
})

// navLink.addEventListener('click', ()=>{
//     console.log('clicked link');
//     navbar.classList.add('noDisplay');
//     navbar.classList.remove('nav_active');
// })



hamburger.addEventListener('click', ()=>{
    console.log('Hamburger was clicked');
    navbar.classList.add('nav_active');
    navbar.classList.remove('noDisplay');
    navbar.style.transition= '2s all';
    
})

const displayProjects = () => {
    console.log('Working');
    galleryContainer.classList.toggle('display');
}

ScrollReveal().reveal('.aboutImage');
// ScrollReveal().reveal('.aboutText');  //delay

// ScrollReveal().reveal('.sites', { interval: 500 });


 
