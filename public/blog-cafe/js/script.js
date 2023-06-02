

const burger = document.getElementById("burger");
const x = document.getElementById("x");
const nav = document.querySelector("nav");
const presentacion = document.getElementById("presentacion");
const navegacion = document.getElementById("navegacion");

function menu (icono) { 

        burger.classList.toggle("active");
        x.classList.toggle("active");
        nav.classList.toggle("active");   
        presentacion.classList.toggle("active");
        navegacion.classList.toggle("navegacien");
     
};

burger.addEventListener("click", () => { menu (burger); });
x.addEventListener("click", () =>{ menu(x); });