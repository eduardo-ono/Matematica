function main() {
  const input = document.getElementById('input-text');
  const inputButton = document.getElementById('input-button');
  const questao1 = document.getElementById('questao-1');
  const questao2 = document.getElementById('questao-2');
  const questao3 = document.getElementById('questao-3');
  const questao4 = document.getElementById('questao-4');
  const questao5 = document.getElementById('questao-5');

  const rm = input.value;
  const A = new Set();
  for (let digit of rm) {
    A.add(parseInt(digit));
  }
  const n = somaRM(rm);

  // MathJax = {
  //   //tex: {inlineMath: [['$', '$'], ['\\(', '\\)']]},
  //   chtml: {
  //     displayAlign: 'left'
  //   },
  // };
  let latex = ``;

  // Questão 1
  const bhaskara = (a, b, c) => {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
      return [];
    }
    if (delta === 0) {
      return [-b / (2 * a)];
    }
    const sqrtDelta = Math.sqrt(delta);
    return [
      (-b + sqrtDelta) / (2 * a),
      (-b - sqrtDelta) / (2 * a),
    ];
  };
  const mi = bhaskara(1, 2 * n, n);
  const m1 = mi[0];
  const m2 = mi[1];
  const x1 = 10 ** m1;
  const x2 = 10 ** m2;
  questao1.innerHTML = '';
  let output = questao1;
  latex = `
    \\begin{align*}
    \\log^2 x + ${n} \\cdot \\log x^2 + ${n} & = 0 \\\\[10pt]
    \\log^2 x + 2 \\cdot ${n} \\cdot \\log x + ${n} & = 0 \\\\[10pt]
    \\ m = \\log x \\\\[10pt]
    \\ m^2 + 2 \\cdot ${n} \\cdot m + ${n} & = 0 \\\\[10pt]
    \\implies \\ m^2 + ${2 * n} m + ${n} & = 0 \\\\[10pt]
    \\implies \\ m_1 = ${m1.toFixed(8)} \\ & \\text{ e } \\ m_2 = ${m2.toFixed(8)} \\\\[10pt]
    \\implies x_1 = 10^{m_1} \\ & \\text{ e } \\ x_2 = 10^{m_2} \\\\[10pt]
    \\implies x_1 = ${(10 ** m1).toFixed(8)} \\ & \\text{ e } \\ x_2 = ${10 ** m2} \\\\[10pt]
    \\text{Conferindo a resposta:} \\\\[10pt]
    \\log^2 ${x1} + ${n} \\cdot \\log ${x1}^2 + ${n} & = ${Math.log10(x1) ** 2 + 2 * n * Math.log10(x1) + n} \\\\[10pt]
    \\log^2 ${x2} + ${n} \\cdot \\log ${x2}^2 + ${n} & = ${Math.log10(x2) ** 2 + 2 * n * Math.log10(x2) + n} \\\\[10pt]
    \\end{align*}
  `;
  MathJax.texReset();
  var options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao1.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });

  // Questão 2
  const nA = A.size;
  questao2.innerHTML = '';
  output = questao2;
  latex = `
    \\begin{align*}
    \\ (1 + i)^{12} & = 1 + \\frac{${n}}{100} \\\\[10pt]
    \\implies \\ \\sqrt[12]{(1 + i)^{12}} & = \\sqrt[12]{1 + \\frac{${n}}{100}} \\\\[10pt]
    \\implies 1 + i & = \\sqrt[12]{1 + \\frac{${n}}{100}} \\\\[10pt]
    \\implies i & = \\sqrt[12]{1 + \\frac{${n}}{100}} - 1 \\\\[10pt]
    \\implies i & = \\sqrt[12]{${1 + n / 100}} - 1 \\\\[10pt]
    \\implies i & = ${(Math.pow(1 + n / 100, 1 /12)).toFixed(6)} - 1 \\\\[10pt]
    \\implies i & = ${(Math.pow(1 + n / 100, 1 /12) - 1).toFixed(6)} \\\\[10pt]
    \\implies i & = ${((Math.pow(1 + n / 100, 1 /12) - 1) * 100).toFixed(2)} \\% \\\\[10pt]
    \\end{align*}
  `;
  // MathJax.texReset();
  var options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao2.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });

  // Questão 3
  questao3.innerHTML = '';
  output = questao3;
  latex = `
    \\begin{align*}
    f(x) = \\frac{\\log 35}{\\log ${n}} = \\\\[10pt]
    = \\frac{\\log 35}{${(Math.log10(n)).toFixed(6)}} = \\\\[10pt]
    = ${(Math.log10(35) / Math.log10(n)).toFixed(6)}
    \\end{align*}
  `;
  // MathJax.texReset();
  options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao3.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });

  // Questão 4
  questao4.innerHTML = '';
  output = questao4;
  const a11 = 1;
  const a12 = n;
  const a21 = 2;
  const a22 = 2 * n;
  latex = `
    \\begin{align*}
    A \\cdot B =
    \\begin{pmatrix}
      ${a11} & ${a12} \\\\
      ${a21} & ${a22}
    \\end{pmatrix}
    \\cdot
    \\begin{pmatrix}
      a & b \\\\
      c & d
    \\end{pmatrix}
    & =
    \\begin{pmatrix}
      0 & 0 \\\\
      0 & 0
    \\end{pmatrix}
    \\\\[10pt]
    \\implies
    \\begin{pmatrix}
      ${a11} \\cdot a + ${a12} \\cdot c & ${a11} \\cdot b + ${a12} \\cdot d \\\\
      ${a21} \\cdot a + ${a22} \\cdot c & ${a21} \\cdot b + ${a22} \\cdot d
    \\end{pmatrix}
    & =
    \\begin{pmatrix}
      0 & 0 \\\\
      0 & 0
    \\end{pmatrix}
    \\\\[10pt]
    \\begin{cases}
    ${a11} a + ${a12} c = 0 \
    \\\\
    ${a11} b + ${a12} d = 0 \
    \\\\
    ${a21} a + ${a22} c = 0 \
    \\\\
    ${a21} b + ${a22} d = 0
    \\end{cases}
    \\quad & \\implies
    \\begin{cases}
    ${a11} a = - ${a12} c \
    \\\\
    ${a11} b = - ${a12} d \
    \\\\
    ${a21} a = - ${a22} c \
    \\\\
    ${a21} b = - ${a22} d
    \\end{cases}
    \\\\[10pt]
    \\begin{cases}
    a = - \\cfrac{${a12}}{${a11}} c \\\\
    b = - \\cfrac{${a12}}{${a11}} d
    \\end{cases}
    \\quad & \\implies
    \\begin{cases}
    c = 1 \\implies a = - \\cfrac{${a12}}{${a11}} \\\\
    d = 1 \\implies b = - \\cfrac{${a12}}{${a11}}
    \\end{cases}
    \\\\[10pt]
    B =
    \\begin{pmatrix}
    a & b \\\\
    c & d
    \\end{pmatrix}
    & =
    \\begin{pmatrix}
    - \\cfrac{${a12}}{${a11}} & - \\cfrac{${a12}}{${a11}} \\\\
    \\phantom{-}1 & \\phantom{-}1
    \\end{pmatrix}
    \\end{align*}
  `;
  // MathJax.texReset();
  options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao4.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });

  // Questão 5
  questao5.innerHTML = '';
  output = questao5;
  const lei = (n, i, j) => n - 3 * i + 2 * j;
  latex = `
    \\begin{align*}
    i) \\quad & B =
    \\begin{pmatrix}
      ${lei(n, 1, 1)} & ${lei(n, 1, 2)} & ${lei(n, 1, 3)} \\\\
      ${lei(n, 2, 1)} & ${lei(n, 2, 2)} & ${lei(n, 2, 3)} \\\\
      ${lei(n, 3, 1)} & ${lei(n, 3, 2)} & ${lei(n, 3, 3)}
    \\end{pmatrix}
    \\\\[10pt]
    ii) \\quad & \\text{Diagonal principal } = \\{${lei(n, 1, 1)}, ${lei(n, 2, 2)}, ${lei(n, 3, 3)} \\} \\\\[10pt]
    iii) \\quad & \\text{Diagonal secundária } = \\{${lei(n, 1, 3)}, ${lei(n, 2, 2)}, ${lei(n, 3, 1)} \\} \\\\[10pt]
    \\end{align*}
  `;
  // MathJax.texReset();
  options = MathJax.getMetricsFor(output);
  MathJax.tex2chtmlPromise(latex, output).then(function (node) {
    questao5.appendChild(node);
    MathJax.startup.document.clear();
    MathJax.startup.document.updateDocument();
  });
}

function somaRM(rm) {
  return rm.split('').reduce((acc, curr) => acc + Number(curr), 0);
}
