/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/

const rs = require('readline-sync');

const quantidade = parseInt(rs.question("Quantas maçãs deseja comprar? "));
const preco = quantidade >= 12 ? 0.25 : 0.30;
const total = quantidade * preco;
console.log(`Total: R$ ${total.toFixed(2)}`);





