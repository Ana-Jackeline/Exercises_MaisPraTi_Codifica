/*3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/ 

function palavrasUnicas(str) {
    const palavras = str.split(' ');
    const unicas = [];
    for (let i = 0; i < palavras.length; i++) {
        if (palavras.indexOf(palavras[i]) === palavras.lastIndexOf(palavras[i])) {
            unicas.push(palavras[i]);
        }
    }
    return unicas;
}

console.log(palavrasUnicas("olá olá mundo mundo teste exemplo")); // [ 'teste', 'exemplo' ]
