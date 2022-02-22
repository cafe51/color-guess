let pontos = 0;

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

function addPlacar() {
  const placar = document.querySelector('#score');
  placar.innerText = `Placar: ${pontos}`;
}

function corAserAdvinhada() {
  const balls2 = document.querySelectorAll('.ball');
  const cor = document.querySelector('#rgb-color');
  const i = Math.floor(Math.random() * 6);
  cor.innerText = `${balls2[i].style.backgroundColor}`;
}

function responde(evt) {
  const placar = document.querySelector('#score');
  const corCerta = document.querySelector('#rgb-color');
  const mensagem = document.querySelector('#answer');
  if (evt.target.style.backgroundColor === corCerta.innerText) {
    mensagem.innerText = 'Acertou!';
    pontos += 3;
    placar.innerText = `Placar: ${pontos}`;
  } else mensagem.innerText = 'Errou! Tente novamente!';
}

function jogo() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', responde);
  }
}

function removeCirculos() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].parentNode.removeChild(balls[i]);
  }
}

function resetGame() {
  removeCirculos();
  opcoesDeCores();
  corAserAdvinhada();
  jogo();
  const mensagem = document.querySelector('#answer');
  mensagem.innerText = 'Escolha uma cor';
}

function atribuiEfeitoAoBotaoReset() {
  const botaoR = document.querySelector('#reset-game');
  botaoR.addEventListener('click', resetGame);
}

opcoesDeCores();

corAserAdvinhada();

jogo();

atribuiEfeitoAoBotaoReset();

addPlacar();
