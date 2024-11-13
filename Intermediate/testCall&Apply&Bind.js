const falar = function() {
    console.log(`Olá, eu me chamo ${this.nome} e tenho ${this.idade} anos.`);
}

const epilef = {
    nome: 'EpilefEpilefEpilef',
    idade: '002',
}

const mari = {
    nome: 'Mari',
    idade: '001'
}

falar.call(mari);
falar.call(epilef);
