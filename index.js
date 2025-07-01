function mostrarSorpresa() {
  const sorpresa = document.getElementById('sorpresa');
  sorpresa.style.display = 'block';
  sorpresa.style.opacity = 0;
  sorpresa.style.transition = 'opacity 0.8s cubic-bezier(.4,2,.6,1)';
  setTimeout(() => {
    sorpresa.style.opacity = 1;
    sorpresa.animate([
      { transform: 'scale(0.7)' },
      { transform: 'scale(1.1)' },
      { transform: 'scale(1)' }
    ], {
      duration: 700,
      easing: 'cubic-bezier(.4,2,.6,1)'
    });
    // Después de la animación, mostrar "Te amo"
    setTimeout(() => {
      const teAmo = document.createElement('div');
      teAmo.textContent = 'Te amo 💖';
      teAmo.style.marginTop = '18px';
      teAmo.style.fontSize = '1.5em';
      teAmo.style.color = '#e60073';
      teAmo.style.fontWeight = 'bold';
      teAmo.style.opacity = 0;
      teAmo.style.transition = 'opacity 1s';
      sorpresa.appendChild(teAmo);
      setTimeout(() => {
        teAmo.style.opacity = 1;
      }, 100);
    }, 900);
  }, 50);
}

// Corazones flotando animados y variados
setInterval(() => {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = 4 + Math.random() * 3 + "s";
  // Efectos extra:
  const size = 16 + Math.random() * 24;
  corazon.style.width = size + "px";
  corazon.style.height = size + "px";
  corazon.style.background = `hsl(${Math.random()*360},80%,60%)`;
  corazon.style.opacity = 0.5 + Math.random() * 0.5;
  corazon.style.zIndex = 1;
  document.body.appendChild(corazon);
  setTimeout(() => corazon.remove(), 7000);
}, 350);