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
    setTimeout(showCode, 1500); 
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
        "value": "#00BFFF" 
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
        "color": "#00BFFF", 
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1, /* Velocidad de movimiento */
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
    
    "retina_detect": true
  });
});

//animacion flecha


const nameGlowEl = document.querySelector('.name-glow');
  nameGlowEl.addEventListener('animationend', () => {
    nameGlowEl.classList.add('typing-done');
  });


document.querySelector(".arrow-container").addEventListener("click", () => {
  document.querySelector("#proyectos").scrollIntoView({ behavior: "smooth" });
});



//animacion de gltch en el nombre

  document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el elemento que contiene el nombre
    const nameElement = document.querySelector('.name-glow');
    
    // Espera 3 segundos, la duración de la animación de escritura
    setTimeout(() => {
      // Después de 3 segundos, añade la clase 'glitch-effect'
      nameElement.classList.add('glitch-effect');
    }, 3000);
  });

 
 //animacion de las cart de habilidades
 
  document.querySelectorAll('.skill-card').forEach(card => {
  // Hover animación tipo pulso
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    card.style.transform = 'scale(1.05)';
    card.style.boxShadow = '0 0 25px rgba(0,255,255,0.6)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 15px rgba(0,255,255,0.2)';
  });

  // Efecto de vibración al hacer clic
  card.addEventListener('click', () => {
    card.style.animation = 'vibrate 0.3s linear';
    setTimeout(() => {
      card.style.animation = '';
    }, 300);
  });
});


const style = document.createElement('style');
style.innerHTML = `
@keyframes vibrate {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}
`;
let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');

  function showSlide(index) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  }

  // Inicializar carrusel
  showSlide(currentIndex);

  // Cambio automático cada 5 segundos
  setInterval(nextSlide, 5000);