/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const rs = require('readline-sync');

console.log("Menu:\n1 - Saudação\n2 - Data Atual\n3 - Sair");
const opcao = rs.question("Escolha uma opção: ");

switch (opcao) {
  case '1':
    console.log("Olá, usuário!");
    break;
  case '2':
    console.log("Data atual: " + new Date().toLocaleDateString());
    break;
  case '3':
    console.log("Saindo...");
    break;
  default:
    console.log("Opção inválida");
}


