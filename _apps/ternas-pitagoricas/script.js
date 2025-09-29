
function ordenarArray(a, b, c) {
  let arr = [a, b, c];
  arr.sort((x, y) => x - y);
  return arr;
}

function trianguloEhValido(a, b, c) {
  return (a + b > c && a + c > b && b + c > a);
}

function testandoCateto(b) {
  let ternas = [];
  for (let c = 1; c <= 5000; c++) {
    for (let a = 1; a <= 5000; a++) {
      if (!trianguloEhValido(a, b, c)) {
        continue;
      }
      if (a * a == b * b + c * c) {
        ternas.push([a, b, c].sort((x, y) => x - y));
      }
    }
  }
  ternas = removeDuplicateArrays(ternas);
  return ternas;
}

function testandoHipotenusa(a) {
  let ternas = [];
  for (let b = 1; b <= 1000; b++) {
    for (let c = 1; c <= 1000; c++) {
      if (!trianguloEhValido(a, b, c)) {
        continue;
      }
      if (a * a == b * b + c * c) {
        ternas.push([a, b, c].sort((x, y) => x - y));
      }
    }
  }
  ternas = removeDuplicateArrays(ternas);
  return ternas;
}

function removeDuplicateArrays(arrayOfArrays) {
  const uniqueStrings = new Set();
  const uniqueArrays = [];

  for (const arr of arrayOfArrays) {
    const stringifiedArray = JSON.stringify(arr);
    if (!uniqueStrings.has(stringifiedArray)) {
      uniqueStrings.add(stringifiedArray);
      uniqueArrays.push(arr);
    }
  }
  return uniqueArrays;
}

function main() {
  let cont = 0;
  const app = document.getElementById("app");
  app.innerHTML = 'Aguarde...';
  const lado_input = document.getElementById("input-text").value;
  const NUM_TRIANGULOS = 100;
  let lado_value = lado_input ? parseInt(lado_input) : 1;
  let lado = lado_value;
  app.innerHTML = `<h2>Ternas Pitagóricas (n=${NUM_TRIANGULOS})</h2>`;
  let ternas1 = [];
  let ternas2 = [];
  let ternas = [];
  for (let triangulos = 1; triangulos <= NUM_TRIANGULOS; triangulos++) {
    cont = 0;
    ternas1 = testandoCateto(lado);
    ternas2 = testandoHipotenusa(lado);
    ternas = [...ternas, ...ternas1, ...ternas2];
    cont += ternas.length;
    lado++;
  }
  ternas = removeDuplicateArrays(ternas);
  let count = 0;
  let text = '';
  for (const terna of ternas) {
    lado = terna[0];
    text += `${lado}: (`;
    for (const value of terna) {
      text += `${value}`;
      if (terna.indexOf(value) < terna.length - 1) {
        text += ', ';
      }
    }
    text += ')  ';
    if (lado == terna[0]) {
      text += '<br>';
    }
  }
  let p = document.createElement('p');
  p.innerHTML = text;
  app.appendChild(p);
}
