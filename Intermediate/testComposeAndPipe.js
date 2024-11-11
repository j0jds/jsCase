const positivarNumero = (num) => Math.abs(num);
const multiplicarPor4 = (num) => num * 4;
const somar2 = (num) => num + 2;
const subtrair1 = (num) => num - 1;

// Pipe
const processador = (...fns) => {
    return (valor) => {
        return fns.reduce((acc, fn) => {
            return fn(acc);
        }, valor);
    }
}

// Compose
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