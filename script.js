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


const nameGlowEl = document.querySelector('.name-glow');
  nameGlowEl.addEventListener('animationend', () => {
    nameGlowEl.classList.add('typing-done');
  });



// Proyectos dinámicos
const projects = {
  1: {
    title: "Página neón",
    description: "Segundo proyecto desarrollado para fortalecer conocimientos básicos de HTML y CSS. Durante este proyecto, perfeccioné el uso de Flexbox, optimicé la estructuración en HTML y diseñé páginas web completamente responsivas.",
    images: ["images/neon.png"], 
    stack: ["HTML", "CSS"],
    links: {
      demo: "https://tudemo1.com",
      github: "https://github.com/tuusuario/proyecto1",
      detalles: "proyecto1.html"
    }
  },
  2: {
    title: "Diseño Ecommerce para suplementos deportivos",
    description: "Diseño de E-commerce de suplementos deportivos y planes de entrenamiento. En este proyecto se aplico react y nodeJS.",
    images: ["img/proyecto2.png", "img/proyecto2-extra.png"],
    stack: ["HTML", "CSS", "JavaScript","React"],
    links: {
      demo: "https://tudemo2.com",
      github: "https://github.com/tuusuario/proyecto2",
      detalles: "proyecto2.html"
    }
  },
  3: {
    title: "Página de asesoría tecnológica",
    description: "En desarrollo: sistema diseñado para ofrecer un catálogo completo de productos y servicios tecnológicos.",
    images: [],
    stack: ["Próximamente"],
    links: {}
  }
};

// Modal
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

// Selecciona todas tus cards y les da el ID del proyecto
document.querySelectorAll(".proyectos .card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const project = projects[index + 1];

    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="modal-images">
        ${project.images.length > 0 
          ? project.images.map(img => `<img src="${img}" alt="">`).join("")
          : "<p style='color:#aaa;'>Sin imágenes aún</p>"}
      </div>
      <div class="stack">
        ${project.stack.map(tech => `<span>${tech}</span>`).join("")}
      </div>
      <div class="modal-buttons">
        ${project.links.demo ? `<a href="${project.links.demo}" target="_blank">🌐 Ver Demo</a>` : ""}
        ${project.links.github ? `<a href="${project.links.github}" target="_blank">💻 Ver Código</a>` : ""}
        ${project.links.detalles ? `<a href="${project.links.detalles}" target="_blank">📄 Más Detalles</a>` : ""}
      </div>
    `;

    modal.style.display = "flex";
  });
});

// cerrar modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});


document.querySelector(".arrow-container").addEventListener("click", () => {
  document.querySelector("#proyectos").scrollIntoView({ behavior: "smooth" });
});
