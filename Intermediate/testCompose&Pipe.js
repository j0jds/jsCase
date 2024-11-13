const positivarNumero = (num) => Math.abs(num);
const multiplicarPor4 = (num) => num * 4;
const somar2 = (num) => num + 2;
const subtrair1 = (num) => num - 1;

// Pipe
// O pipe tem uma ordem de funcionamento que leva em consideração a leitura das funções da esquerda para a direita, high order function para callback.
const processador = (...fns) => {
    return (valor) => {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, valor);
    }
}

// Compose
// O compose, nesse caso, funciona de maneira inversa ao pipe. Aqui as funções são executadas da direita para a esquerda.
// const processador = (...fns) => {
//     return (valor) => {
//         return fns.reduceRight((acc, fn) => {
//             return fn(acc);
//         }, valor);
//     }
// }

const positivarNumeroEMultiplicarPor4 = processador(positivarNumero, multiplicarPor4);
const positivarMultiplicarPor4ESomar2 = processador(positivarNumero, multiplicarPor4, somar2);
const positivarMultiplicarPor4Somar2ESubtrair1 = processador(positivarNumero, multiplicarPor4, somar2, subtrair1);

console.log(positivarNumeroEMultiplicarPor4(-50));
console.log(positivarMultiplicarPor4ESomar2(-50));
console.log(positivarMultiplicarPor4Somar2ESubtrair1(-50));