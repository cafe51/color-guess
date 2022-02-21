function corAserAdvinhada() {
  const cor = document.querySelector('#rgb-color');
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  cor.innerText = `(${r}, ${g}, ${b})`;
}

function opcoesDeCores() {
  for (let i = 0; i < 6; i += 1) {
    const balls = document.createElement('div');
    balls.className = 'ball';
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    balls.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    const sectionOpcoes = document.querySelector('#opcoes');
    sectionOpcoes.appendChild(balls);
  }
}
corAserAdvinhada();

opcoesDeCores();
