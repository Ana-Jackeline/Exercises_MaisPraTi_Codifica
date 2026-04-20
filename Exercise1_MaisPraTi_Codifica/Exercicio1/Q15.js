/*15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

const rs = require('readline-sync');

let a = 0, b = 1;
console.log("Sequência de Fibonacci:");
for (let i = 0; i < 10; i++) {
  console.log(a);
  [a, b] = [b, a + b];
}
