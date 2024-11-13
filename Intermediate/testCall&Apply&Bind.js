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

falar.call(epilef, 'agiota', '0,10');
falar.call(mari, 'gari', '548.973,00' );
