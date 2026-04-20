/*7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.*/ 

function nomesOrdenados(produtos) {
    return produtos
        .sort((a, b) => a.preco - b.preco)
        .map(produto => produto.nome);
}

const produtos = [
    { nome: "Produto C", preco: 50 },
    { nome: "Produto A", preco: 10 },
    { nome: "Produto B", preco: 30 }
];

console.log(nomesOrdenados(produtos)); // [ 'Produto A', 'Produto B', 'Produto C' ]
