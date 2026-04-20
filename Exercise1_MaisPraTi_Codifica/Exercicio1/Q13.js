/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const rs = require('readline-sync');

let soma13 = 0, count13 = 0;
let num13;
do {
  num13 = parseFloat(rs.question("Digite um número decimal (0 para sair): "));
  if (num13 !== 0) {
    soma13 += num13;
    count13++;
  }
} while (num13 !== 0);

if (count13 > 0) {
  console.log("Média:", (soma13 / count13).toFixed(2));
} else {
  console.log("Nenhum número inserido.");
}
