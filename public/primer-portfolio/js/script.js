const header = document.getElementById('header');
const article = document.getElementById('article');
const aside = document.getElementById('aside');
const footer = document.getElementById('footer');
const enrollers = document.getElementById('enrollers');

const burger = document.getElementById("burger");
const x = document.getElementById("x");
const navegacion = document.getElementById("navegacion");
const ini = document.getElementById("ini");
const sm = document.getElementById("sm");
const prop = document.getElementById("prop");

let alturamenu = 80 ;


function animacionscroll(header,article,aside,footer,enrollers)  {
  

  let screenSize = window.innerHeight;

  console.log(header.getBoundingClientRect().top);
  console.log(screenSize);
  
    if((header.getBoundingClientRect().top < screenSize) && (( header.getBoundingClientRect().bottom + window.innerHeight - alturamenu) > screenSize) ) {
      header.classList.add('header');
    } else {
      header.classList.remove('header');
    
    }
  
    if((article.getBoundingClientRect().top < screenSize) && (( article.getBoundingClientRect().bottom + window.innerHeight - alturamenu) > screenSize)) {
      article.classList.add('article');
      
    } else {
      article.classList.remove('article');
      
    }

    if((aside.getBoundingClientRect().top < screenSize) && (( aside.getBoundingClientRect().bottom + window.innerHeight - alturamenu) > screenSize)) {
      aside.classList.add('aside');
      
    } else {
      aside.classList.remove('aside');
      
    }

    if((footer.getBoundingClientRect().top < screenSize) && (( footer.getBoundingClientRect().bottom + window.innerHeight - alturamenu) > screenSize)) {
      footer.classList.add('footer');
     
    } else {
      footer.classList.remove('footer');
      
    }

    if((enrollers.getBoundingClientRect().top < screenSize) && ((enrollers.getBoundingClientRect().bottom + window.innerHeight - alturamenu) > screenSize)) {
      enrollers.classList.add('animacionenrollers');
    } else {
      enrollers.classList.remove('animacionenrollers');
    }

}

function menu (burger, x, navegacion) { 

        burger.classList.toggle("active");
        x.classList.toggle("active");
        navegacion.classList.toggle("active");
     
};

window.addEventListener('scroll', ()=> {animacionscroll(header,article,aside,footer,enrollers);} );
burger.addEventListener('click', () => { menu (burger, x, navegacion); });
x.addEventListener('click', () =>{ menu(burger, x , navegacion); });
ini.addEventListener('click', () =>{ menu(burger, x , navegacion); });
sm.addEventListener('click', () =>{ menu(burger, x , navegacion); });
prop.addEventListener('click', () =>{ menu(burger, x , navegacion); });



