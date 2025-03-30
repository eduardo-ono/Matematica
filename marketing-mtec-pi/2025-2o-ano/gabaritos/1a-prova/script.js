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

  // Questão 1
  const B = new Set([1, 2, 3, 4, 5, 6]);
  const AunionB = A.union(B);
  const AintersectionB = A.intersection(B);
  const AdiffB = A.difference(B);
  let questao1Str = `
    <p>i) &ensp; \(2 + 2\)A = {${[...A].join(', ')}}</p>
    <p>ii) &ensp; A &cup; B = {${[...AunionB].join(', ')}}</p>
    <p>iii) &ensp; A &cap; B = {${[...AintersectionB].join(', ')}}</p>
    <p>iii) &ensp; A &minus; B = {${[...AdiffB].join(', ')}}</p>
    `;
  questao1.innerHTML = questao1Str + '\(iii\);';
  MathJax.texReset();
  output = questao1;
  var options = MathJax.getMetricsFor(output);
  // options.display = display.checked;

  MathJax.tex2chtmlPromise(input, output).then(function (node) {
    questao1.appendChild(node);
  });
  // Questão 2
  const nA = A.size;

  // Questão 3
  vennDiagram.innerHTML = '';
  const abc = n;
  const ab = 2;
  let data = [
    {
      x: 'A',
      value: 100,
      name: '100'
    },
    {
      x: 'B',
      value: 100,
      name: 'INGREDIENTS \n Key elements available'
    },
    {
      x: 'C',
      value: 100,
      name: 'COMPLEXITY \n Manageable level'
    },
    {
      x: ['A', 'C'],
      value: 25,
      name: 'Add to \n wishlist'
    },
    {
      x: ['A', 'B'],
      value: 25,
      name: 'Possibility \n of disaster'
    },
    {
      x: ['B', 'C'],
      value: 25,
      name: 'Try on a \n holiday'
    },
    {
      x: ['A', 'B', 'C'],
      value: n,
      name: 'The perfect \n recipe'
    }
  ]
  chart = anychart.venn(data);
  chart.container('venn-diagram');
  chart.draw();

  // Questão 4

}

function somaRM(rm) {
  return rm.split('').reduce((acc, curr) => acc + Number(curr), 0);
}
