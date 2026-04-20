/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/

const rs = require('readline-sync');

const peso = parseFloat(rs.question("Digite seu peso (kg): "));
const altura = parseFloat(rs.question("Digite sua altura (m): "));
const imc = peso / (altura * altura);
console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}



