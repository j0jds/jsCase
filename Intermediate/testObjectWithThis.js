const pessoa = {
    nome: 'FelipeFelipeFelipe',
    idade: 200,
    /** O uso de this.propriedade no lugar de pessoa.propriedade torna o código dinâmico. Se fosse pessoa.propriedade, apenas o que 
    consta em pessoa iria aparecer no console. Como é this.propriedade e o pessoa2 valoriza a propriedade falar de pessoa, o
    resultado no console acaba valendo para ambos os objetos. */ 
    falar() {
        console.log(`Olá, eu me chamo ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa2 = {
    nome: 'Lari',
    idade: 100
}

// Como a pessoa2 não tem a propriedade falar, ela vai ser adicionada automaticamente já que está sendo feita uma valorização.
pessoa2.falar = pessoa.falar;

pessoa.falar();
pessoa2.falar();

// --------------------------------------------------------------------------------------------------------------------------------- //

// Uma forma de melhor estruturar é alocando a função numa constante separada.
const falar = function() {
        console.log(`Olá, eu me chamo ${this.nome} e tenho ${this.idade} anos.`);
}

const pessoa3 = {
    nome: 'EpilefEpilefEpilef',
    idade: '002',
}

const pessoa4 = {
    nome: 'Mari',
    idade: '001'
}

pessoa3.falar = falar;
pessoa4.falar = falar;

pessoa3.falar();
pessoa4.falar();
