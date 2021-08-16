

/* ParticlesJS */

particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.8,
          "speed": 3
        },
        "repulse": {
          "distance": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });



/* ParticlesJS */

/* Menu de navegacion animacion */

let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.list-container');
let containerMenu = document.querySelector('.menu');
let activador = true;


containerMenu.addEventListener('click', () => {

  document.querySelector('.btn-menu i').classList.toggle('fa-times');

  if (activador) {
    menu.style.left = "0";
    menu.style.transition = "0.5s";

    activador = false;
  }
  else {
    activador = false;
    menu.style.left = "-100%";
    menu.style.transition = "0.5s";

    activador = true;
  }
});

/* Menu de navegacion animacion */

/* Intercalar clase active */

let enlaces = document.querySelectorAll('.list li a');

enlaces.forEach((element) => {
  element.addEventListener('click', (event) => {

    enlaces.forEach((link) => {
      link.classList.remove('activo');

    });

    event.target.classList.add('activo');
  });
});

/* Intercalar clase active */

/* Efectos Scroll */

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go-top');
window.onscroll = () => {

  let currenScrollPos = window.pageYOffset

  /* Mostrar y ocultar menu */
  if (prevScrollPos > currenScrollPos) {

    containerMenu.style.top = "0";
    containerMenu.style.transition = "0.5";

  } else {
    containerMenu.style.top = "-60px";
    containerMenu.style.transition = "0.5";
  }

  prevScrollPos = currenScrollPos;

  /* Mostrar y ocultar menu */

  /* Mostrar y ocultar scroll estilos */

  let arriba = window.scroll.pageYOffset;

  if (arriba <= 600) {
    containerMenu.style.borderBottom = "none";

    goTop.style.right = "-100%";
  } else {
    containerMenu.style.borderBottom = "3px solid #F05454";

    goTop.style.right = "0";
    goTop.style.transition = "0.5s";
  }

  /* Mostrar y ocultar scroll estilos */

}

goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let verAbajo = document.querySelector('#abajo');

verAbajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
});
