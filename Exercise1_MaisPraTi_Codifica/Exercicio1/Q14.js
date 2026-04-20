/*14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/

const rs = require('readline-sync');

const numeroFatorial = parseInt(rs.question("Digite um número para calcular o fatorial: "));
let fatorial = 1;
for (let i = 1; i <= numeroFatorial; i++) {
  fatorial *= i;
}
console.log(`Fatorial de ${numeroFatorial} é ${fatorial}`);
