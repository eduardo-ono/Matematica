/*
* https://rikyperdana.medium.com/change-decimal-to-fraction-in-js-8cf1dd8f99c8
*/

function main() {
  const input = document.getElementById('input-text');
  const inputButton = document.getElementById('input-button');
  const questao1 = document.getElementById('questao-1');
  const questao2 = document.getElementById('questao-2');
  const questao3 = document.getElementById('questao-3');
  const questao4 = document.getElementById('questao-4');
  const questao5 = document.getElementById('questao-5');
  const vennDiagram = document.getElementById('venn-diagram');

  const rm = input.value;
  const A = new Set();
  for (let digit of rm) {
    A.add(parseInt(digit));
  }
  const n = somaRM(rm);
  const nA = A.size;
  let latex = '';

  // Questão 1
  let B = new Set([1, 4, 5, 9]);
  const AunionB = A.union(B);
  const AintersectionB = A.intersection(B);
  const BdiffA = B.difference(A);
  latex = `
    \\begin{align*}
    i) \\quad & A = \\{${[...A].join(', ')}\\} \\\\[10pt]
    ii) \\quad & A \\cup B = \\{${[...AunionB].join(', ')}\\} \\\\[10pt]
    iii) \\quad & A \\cap B = \\{${[...AintersectionB].join(', ')}\\} \\\\[10pt]
    iv) \\quad & B - A = \\{${[...BdiffA].join(', ')}\\}
    \\end{align*}
  `;
  questao1.innerHTML = '';
  output = questao1;
  MathJax.texReset();
  var options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao1.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });

  // Questão 2
  B = A.intersection(new Set([2, 3, 4, 5, 8]));
  latex = `
  \\begin{align*}
  i) \\quad & B = \\{${[...B].join(', ')}\\} \\\\[10pt]
  ii) \\quad & n(\\wp(B) = 2^{n(B)} = 2^{${B.size}} = ${2 ** B.size} \\\\[10pt]
  \\end{align*}
  `;
  questao2.innerHTML = '';
  output = questao2;
  MathJax.texReset();
  var options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao2.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });

  // Questão 3
  questao3.innerHTML = '';
  vennDiagram.innerHTML = '';
  const abc = n;
  const ab = 60 - n;
  const ac = 50 - n;
  const bc = 40 - n;
  const a = 280 - (ab + ac + abc);
  const b = 230 - (ab + bc + abc);
  const c = 190 - (ac + bc + abc);
  let data = [
    {
      x: 'F',
      value: a,
      name: `F: ${a}`
    },
    {
      x: 'S',
      value: b,
      name: `S: ${b}`
    },
    {
      x: 'L',
      value: c,
      name: `L: ${c}`
    },
    {
      x: ['F', 'L'],
      value: ac,
      name: `${ac}`
    },
    {
      x: ['F', 'S'],
      value: ab,
      name: `${ab}`
    },
    {
      x: ['S', 'L'],
      value: bc,
      name: `${bc}`
    },
    {
      x: ['F', 'S', 'L'],
      value: n,
      name: `${n}`
    }
  ]
  chart = anychart.venn(data);
  chart.width(300);
  chart.height(300);
  chart.container('venn-diagram');
  chart.draw();
  //
  latex = `
    \\begin{align*}
    i) \\quad & ${a} \\text{ gostam somente de feijoada.} \\\\[10pt]
    ii) \\quad & ${b} \\text{ gostam somente de strogonoff.} \\\\[10pt]
    iii) \\quad & ${c} \\text{ gostam somente de lasanha.} \\\\[10pt]
    iv) \\quad & ${a + b + c} \\text{ gostam de exatamente um dos pratos.} \\\\[10pt]
    v) \\quad & ${ab + ac + bc} \\text{ gostam de exatamente dois pratos.} \\\\[10pt]
    vi) \\quad & ${a + b + c + ab + ac + bc + abc}\ \\text{ gostam de pelo menos um dos pratos.} \\\\[10pt]
    vii) \\quad & ${ab + ac + bc + abc} \\text{ gostam de pelo menos dois pratos.} \\\\[10pt]
    viii) \\quad & ${1000 - (a + b + c + ab + ac + bc + abc)} \\text{ não gostam de nenhum dos pratospratos.} \\\\[10pt]
    \\end{align*}
  `;
  output = questao3;
  MathJax.texReset();
  var options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao3.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });

  // Questão 4
  let decimalStr = `5.47${n}${n}${n}${n}${n}${n}${n}${n}${n}${n}`;
  let decimal = parseFloat(decimalStr);
  decToFrac = dec =>
    [...Array(1000).keys()].flatMap(
      i => [...Array(1000).keys()].map(
        j => [
          i + 1, j + 1, (i + 1) / (j + 1),
          Math.abs(((i + 1) / (j + 1)) - dec)
        ]
      )
    ).sort((a, b) => a[3] - b[3])[0].slice(0, 2);
    latex = `
      \\frac{${decToFrac(decimal)[0]}}{${decToFrac(decimal)[1]}}
    `;
    questao4.innerHTML = '';
    output = questao4;
    MathJax.texReset();
    var options = MathJax.getMetricsFor(output);
    MathJax.tex2chtmlPromise(latex, output).then(function (node) {
      questao4.appendChild(node);
      MathJax.startup.document.clear();
      MathJax.startup.document.updateDocument();
    });

  // Questão 5
  latex = `
    \\begin{align*}
    i) \\quad & \\text{Distributiva.} \\\\[10pt]
    ii) \\quad & \\text{Elemento oposto da adição.} \\\\[10pt]
    iii) \\quad & \\text{Elemento inverso da multiplicação.} \\\\[10pt]
    \\end{align*}
  `;
  questao5.innerHTML = '';
  output = questao5;
  MathJax.texReset();
  var options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao5.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });



}

function somaRM(rm) {
  return rm.split('').reduce((acc, curr) => acc + Number(curr), 0);
}
