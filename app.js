// To reveal elements on scroll

var aboutImage = document.querySelector('.aboutImage');
var aboutText = document.querySelector('aboutText');
var sites = document.querySelector('.sites');

ScrollReveal().reveal('.aboutImage');
ScrollReveal().reveal('.aboutText');  //delay

ScrollReveal().reveal('.sites', { interval: 400 });