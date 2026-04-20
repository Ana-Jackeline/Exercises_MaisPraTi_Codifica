/*8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.*/ 

function agruparVendas(vendas) {
    return vendas.reduce((acc, venda) => {
        if (!acc[venda.cliente]) {
            acc[venda.cliente] = 0;
        }
        acc[venda.cliente] += venda.total;
        return acc;
    }, {});
}

const vendas = [
    { cliente: 'Ana', total: 100 },
    { cliente: 'João', total: 200 },
    { cliente: 'Ana', total: 150 },
    { cliente: 'Maria', total: 300 }
];

console.log(agruparVendas(vendas));
// { Ana: 250, João: 200, Maria: 300 }
