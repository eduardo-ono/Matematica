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
  questao1.innerHTML = '';
  let output = questao1;
  latex = `
    \\begin{align*}
    \\log_{${n}} 10000^8 & = 8 \\cdot \\log_{${n}} 10000 = \\\\[10pt]
    8 \\cdot \\cfrac{\\log 10000}{\\log ${n}} & = 8 \\cdot \\cfrac{4}{\\log ${n}} = \\\\[10pt]
    \\cfrac{32}{${Math.log10(n).toFixed(3)}} & = ${(32 / Math.log10(n)).toFixed(2)}\\\\[10pt]
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
    f(N) & = 0.2 + \\log{\\left(\\cfrac{50 \\cdot N}{3}\\right)} \\\\[10pt]
    & = 0.2 + \\log{(50 \\cdot N)} - \\log 3 \\\\[10pt]
    & = 0.2 + \\log 50 + \\log N - \\log 3 \\\\[10pt]
    & = 0.2 + \\log{\\cfrac{100}{2}} + \\log N - \\log 3 \\\\[10pt]
    & = 0.2 + \\log 100 - \\log 2 + \\log N - \\log 3 \\\\[10pt]
    f(${n}) & = 0.2 + 2 - 0.301 + \\log ${n} - 0.477 \\\\[10pt]
    & = 1.422 + ${(Math.log10(n)).toFixed(3)} \\\\[10pt]
    & = ${(1.422 + Math.log10(n)).toFixed(3)}
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
    f(a) + f(b) & = \\log(a) + \\log(b) = \\\\[10pt]
    & = \\log(a \\cdot b) = \\\\[10pt]
    & = \\log N^2 = \\\\[10pt]
    & = 2 \\cdot \\log ${n} = \\\\[10pt]
    & = 2 \\cdot ${(Math.log10(n)).toFixed(3)} = ${(2 * Math.log10(n)).toFixed(3)}
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
  const a11 = 2 * n;
  const a12 = 4;
  const a21 = n;
  const a22 = 2;
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
  const lei = (n, i, j) => n + i - 3*j;
  latex = `
    \\begin{align*}
    M & =
    \\begin{pmatrix}
      ${lei(n, 1, 1)} & ${lei(n, 1, 2)} \\\\
      ${lei(n, 2, 1)} & ${lei(n, 2, 2)}
    \\end{pmatrix}
    \\\\[10pt]
    i) \\quad & \\text{Diagonal principal } = \\{${lei(n, 1, 1)}, ${lei(n, 2, 2)}\\} \\\\[10pt]
    ii) \\quad & \\text{Diagonal secundária } = \\{${lei(n, 1, 2)}, ${lei(n, 2, 1)}\\}
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
