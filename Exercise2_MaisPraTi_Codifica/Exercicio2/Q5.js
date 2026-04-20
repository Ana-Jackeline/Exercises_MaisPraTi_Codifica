/*5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.*/ 

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Exemplo de uso
/*
const func = debounce(() => console.log('Executado!'), 1000);
func();
func();
setTimeout(func, 500); // Executará só uma vez após 1s do último call
*/
