console.time("nqueen");

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

function permutar(vetor, nivel, conjunto) {
  if (nivel == conjunto.length) {
    console.log(vetor);
  } else {
    conjunto.forEach((item) => {
      vetor[nivel] = item;

      if (validar(vetor, nivel)) {
        permutar(vetor, nivel + 1, conjunto);
      }
    });
  }
}

const conjunto = [...Array(4).keys()];
permutar([], 0, conjunto);

console.timeEnd("nqueen");
