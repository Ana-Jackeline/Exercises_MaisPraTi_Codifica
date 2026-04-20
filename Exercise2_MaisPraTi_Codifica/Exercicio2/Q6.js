/*6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações.*/ 

function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
}

// Exemplo:
const slowSquare = memoize(n => {
    console.log('Calculando...');
    return n * n;
});

console.log(slowSquare(4)); // Calcula
console.log(slowSquare(4)); // Retorna do cache
