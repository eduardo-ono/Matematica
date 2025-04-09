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
  let U = new Set([1, 3, 5, 7, 9]);
  let W = new Set([0, 2, 4, 6, 8]);
  const AunionU = A.union(U);
  const AintersectionU = A.intersection(U);
  const AunionW = A.union(W);
  const AintersectionW = A.intersection(W);
  const UintersectionW = U.intersection(W);
  const AdiffU = A.difference(U);
  const UdiffA = U.difference(A);
  const WdiffA = W.difference(A);
  const AcomplementW = W.difference(A);
  latex = `
    \\begin{align*}
    i) \\quad & A = \\{${[...A].join(', ')}\\} \\\\[10pt]
    ii) \\quad & A \\cup U = \\{${[...AunionU].join(', ')}\\} \\\\[10pt]
    iii) \\quad & A \\cap U = \\{${[...AintersectionU].join(', ')}\\} \\\\[10pt]
    iv) \\quad & A \\cup W = \\{${[...AunionW].join(', ')}\\} \\\\[10pt]
    v) \\quad & A \\cap W = \\{${[...AintersectionW].join(', ')}\\} \\\\[10pt]
    vi) \\quad & U \\cap W = \\{${[...UintersectionW].join(', ')}\\} \\\\[10pt]
    vii) \\quad & A - U = \\{${[...AdiffU].join(', ')}\\} \\\\[10pt]
    viii) \\quad & U - A = \\{${[...UdiffA].join(', ')}\\} \\\\[10pt]
    ix) \\quad & W - A = \\{${[...WdiffA].join(', ')}\\} \\\\[10pt]
    x) \\quad & C_W^A = \\{${[...AcomplementW].join(', ')}\\}
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
  const subsets = theArray => theArray.reduce(
    (subsets, value) => subsets.concat(
      subsets.map(set => [value,...set])
    ),
    [[]]
  );
  // sole.log(subsets(A));
  latex = `
  \\begin{align*}
  i) \\quad & A = \\{${[...A].join(', ')}\\} \\\\[10pt]
  ii) \\quad & n(\\wp(A) = 2^{n(A)} = 2^{${A.size}} = ${2 ** A.size} \\\\[10pt]
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
  const ab = 150 - n;
  const ac = 100 - n;
  const bc = 50 - n;
  const a = 600 - (ab + ac + abc);
  const b = 400 - (ab + bc + abc);
  const c = 300 - (ac + bc + abc);
  const total = 2000;
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
    i) \\quad & ${a} \\text{ gostam somente de português.} \\\\[10pt]
    ii) \\quad & ${b} \\text{ gostam somente de inglês.} \\\\[10pt]
    iii) \\quad & ${c} \\text{ gostam somente de espanhol.} \\\\[10pt]
    iv) \\quad & ${a + b + c} \\text{ gostam de exatamente um dos idiomas.} \\\\[10pt]
    v) \\quad & ${ab + ac + bc} \\text{ gostam de exatamente dois idiomas.} \\\\[10pt]
    vi) \\quad & ${a + b + c + ab + ac + bc + abc} \\text{ gostam de pelo menos um dos idiomas.} \\\\[10pt]
    vii) \\quad & ${ab + ac + bc + abc} \\text{ gostam de pelo menos dois idiomas.} \\\\[10pt]
    viii) \\quad & ${total - (a + b + c + ab + ac + bc + abc)} \\text{ não gostam de nenhum dos idiomas.} \\\\[10pt]
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
}

function somaRM(rm) {
  return rm.split('').reduce((acc, curr) => acc + Number(curr), 0);
}
