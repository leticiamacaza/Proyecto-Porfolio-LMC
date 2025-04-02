/*Pegar este código en el archivo de javascript*/ 
document.addEventListener("DOMContentLoaded", function () { 
    const boton = document.querySelector(".button-toggle"); 
    const menuLinks = document.querySelector(".menu"); 
    boton.addEventListener("click", function () { 
        menuLinks.classList.toggle("open"); }); });