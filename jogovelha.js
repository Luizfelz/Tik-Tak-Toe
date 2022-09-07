var casaPreenchida = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
var turno = true; // True é para O e false é para X

function adicionarPecaNaCasa(numCasa, peca) {
  if (0 <= numCasa && numCasa <= 8) {
    const casa = document.getElementById(`${numCasa}`);
    const texto = document.createTextNode(peca);
    casa.appendChild(texto);
  }
}

function removerPecaNaCasa(numCasa) {
  if (0 <= numCasa && numCasa <= 8) {
    const casa = document.getElementById(`${numCasa}`);
    casa.innerText = "";
  }
}

function jogar(numCasa) {
  if (casaPreenchida[numCasa]) {
    return;
  }
  if (turno) {
    adicionarPecaNaCasa(numCasa, "O");
    turno = false;
    casaPreenchida[numCasa] = true;
  } else {
    adicionarPecaNaCasa(numCasa, "X");
    turno = true;
    casaPreenchida[numCasa] = true;
  }
  displayAlterarTurno();
}

function resetarJogo() {
  for (let index = 0; index < casaPreenchida.length; index++) {
    casaPreenchida[index] = false;
    removerPecaNaCasa(index);
  }
  turno = true;
  displayAlterarTurno();
}

function displayAlterarTurno() {
  // mostra de quem é a vez
  const displayRodada = document.getElementById("turno");
  const texto = document.createTextNode(turno ? "O" : "X");
  displayRodada.innerText = "";
  displayRodada.appendChild(texto);
}
