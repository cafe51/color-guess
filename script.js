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

function corAserAdvinhada() {
  const balls2 = document.querySelectorAll('.ball');
  const cor = document.querySelector('#rgb-color');
  const i = Math.floor(Math.random() * 6);
  cor.innerText = `${balls2[i].style.backgroundColor}`;
}

// Math.floor(Math.random() * 6)

// function(evt) {
//   evt.target
// }

// function resposta() {
//     const balls = querySelector('.ball');
//     for (let i = 0; i < balls.length; i += 1) {
//   }
// }

function responde(evt) {
  // const balls = document.querySelectorAll('.ball');
  const corCerta = document.querySelector('#rgb-color');
  const mensagem = document.querySelector('#answer');
  if (evt.target.style.backgroundColor === corCerta.innerText) {
    mensagem.innerText = 'Acertou!';
  } else mensagem.innerText = 'Errou! Tente novamente!';
}

function jogo() {
  const balls = document.querySelectorAll('.ball');
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].addEventListener('click', responde);
  }
}

opcoesDeCores();

corAserAdvinhada();

jogo();

// function jogo() {
//   const balls = document.querySelectorAll('.ball');
//   const corCerta = document.querySelector('#rgb-color');
//   const mensagem = document.querySelector('#answer');
//   for (let i = 0; i < balls.length; i += 1) {
//     balls[i].addEventListener('click', function() {
//       for (let i = 0; i < balls.length; i += 1){
//         if (`${balls[i].style.backgroundColor}` === `${corCerta.style.backgroundColor}`) {
//           mensagem.innerText = 'Acertou!';
//         } else mensagem.innerText = 'Errou!';
//       }
      
//     });
//   }
// }