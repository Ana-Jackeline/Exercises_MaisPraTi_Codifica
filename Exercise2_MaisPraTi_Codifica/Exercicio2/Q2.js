/*2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/ 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function perguntar() {
    readline.question('Adivinhe o número (1 a 100): ', (palpite) => {
        tentativas++;
        const n = parseInt(palpite);
        if (n === numeroSecreto) {
            console.log(`Acertou em ${tentativas} tentativas!`);
            readline.close();
        } else if (n < numeroSecreto) {
            console.log('Mais alto!');
            perguntar();
        } else {
            console.log('Mais baixo!');
            perguntar();
        }
    });
}

// perguntar(); // Descomente para executar
