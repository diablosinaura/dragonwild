
/* efecto menu X*/
document.querySelector(".header__navbars__menu").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

/************************************** */
/*slide*/
/*
const left = document.getElementById ("izq");
const right = document.getElementById("der");
const tarjeta= document.getElementsByClassName('.container__cards__card');
console.log(tarjeta);

left.addEventListener('click', retroceder());

function retroceder() {
    tarjeta.classList.remove('activeCard');
}*/

/************************************** */
