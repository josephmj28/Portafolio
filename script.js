const sections = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));         


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