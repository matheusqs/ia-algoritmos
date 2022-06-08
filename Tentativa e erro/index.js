console.time("nqueen");

function getRandomNumber(limit) {
  return parseInt(Math.random() * limit);
}

function validar(vetor, nivel) {
  for (let i = 0; i < nivel; i++) {
    if (
      vetor[i] == vetor[nivel] ||
      Math.abs(vetor[i] - vetor[nivel]) == Math.abs(i - nivel)
    ) {
      return false;
    }
  }

  return true;
}

function validarVetor(vetor) {
  for (let i = 0; i < vetor.length; i++) {
    if (validar(vetor, i)) {
      return true;
    }
  }

  return false;
}

let conjunto;
let i = 0;

do {
  i++;
  conjunto = [
    getRandomNumber(4),
    getRandomNumber(4),
    getRandomNumber(4),
    getRandomNumber(4),
  ];
} while (validarVetor(conjunto));

console.log(conjunto, i);

console.timeEnd("nqueen");
