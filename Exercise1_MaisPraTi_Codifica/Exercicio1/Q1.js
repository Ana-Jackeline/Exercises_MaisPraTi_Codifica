/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.*/

const rs = require('readline-sync');

const num = parseInt(rs.question("Digite um número inteiro: "));
if (num % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
