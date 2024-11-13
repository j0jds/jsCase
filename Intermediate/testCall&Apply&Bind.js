const falar = function(profissao, salario) {
    console.log(`Olá, eu me chamo ${this.nome}, tenho ${this.idade} anos, sou ${profissao} e ganho R$ ${salario} por mês.`);
}

const epilef = {
    nome: 'EpilefEpilefEpilef',
    idade: '98',
}

const mari = {
    nome: 'Mari',
    idade: '74'
}

// ------------------------------------------------------------------------------------------------------------------------------ //

// Os métodos call() e apply() são utilizados para invocar imediatamente uma função, permitindo especificar explicitamente o contexto (this) no qual ela será executada. A diferença crucial entre eles está na forma como os argumentos são passados para a função: O método call() recebe os argumentos individualmente, separados por vírgula. E o método apply() recebe os argumentos como um array.

// Método Call
falar.call(epilef, 'agiota', '0,10');
falar.call(mari, 'gari', '548.973,00' );

// Método Apply
falar.apply(epilef, ['agiota', '0,10']);
falar.apply(mari, ['gari', '548.973,00']);

console.log('------------------------------------------------------------------------------------------')

// Por outro lado, o método bind() difere ao criar uma nova função com um contexto (this) específico, sem executá-la imediatamente. Em vez disso, ele retorna uma nova função com o contexto vinculado, permitindo sua invocação posterior.

// Método Bind
const falarEpilef = falar.bind(epilef, 'agiota', '0,10');
console.log(falarEpilef());
const falarMari = falar.bind(mari, 'gari', '548.973,00');
console.log(falarMari());