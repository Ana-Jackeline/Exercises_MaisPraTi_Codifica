/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const rs = require('readline-sync');

let valor1 = parseFloat(rs.question("Digite o primeiro valor: "));
let valor2 = parseFloat(rs.question("Digite o segundo valor: "));

if (valor1 > valor2) {
  [valor1, valor2] = [valor2, valor1]; // Troca os valores
}
console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`);

