// Script para que aparezcan las secciones al scrollear

const sections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));         


// animacion del codigo infiinito en el header

const codeLines = [
    "",
  "const developer = 'Joseph';",
  "const purpose = 'Solucionar problemas con creatividad';",
  "console.log('¡Hola mundo!', developer, purpose);"
];

let lineIndex = 0;
const codeContainer = document.getElementById("animated-code");

function showCode() {
  if (lineIndex < codeLines.length) {
    codeContainer.textContent += codeLines[lineIndex] + "\n";
    lineIndex++;
    setTimeout(showCode, 300); 
  } else {
    
    setTimeout(() => {
      codeContainer.textContent = "";
      lineIndex = 0;
      showCode();
    }, 2000);
  }
}

showCode();


// animacion de las particulas en el fondo

document.addEventListener('DOMContentLoaded', function() {
  particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80, /* Número de partículas */
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#00BFFF" /* Color de las partículas (el mismo que tu flecha) */
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
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
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00BFFF", /* Color de las líneas */
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2, /* Velocidad de movimiento */
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
          "enable": true,
          "mode": "repulse" /* Las partículas se repelen al pasar el mouse */
        },
        "onclick": {
          "enable": true,
          "mode": "push" /* Crea nuevas partículas al hacer clic */
        },
        "resize": true
      },
    },
    "retina_detect": true
  });
});