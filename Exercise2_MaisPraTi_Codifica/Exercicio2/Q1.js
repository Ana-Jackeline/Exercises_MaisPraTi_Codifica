/*1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.*/ 

function ehDataValida(dia, mes, ano) {
    const mesesComDias = [31, (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes < 1 || mes > 12) return false;
    if (dia < 1 || dia > mesesComDias[mes - 1]) return false;
    return true;
}

console.log(ehDataValida(29, 2, 2024)); // true
console.log(ehDataValida(31, 4, 2025)); // false
