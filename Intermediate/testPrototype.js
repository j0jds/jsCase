// class Pessoa {
//     constructor(nome, idade) {
//         this.nome = nome
//         this.idade = idade
//     }
// }

// -------------------------------------------------- //

const Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function() {
    console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade.`);
}

const p = new Pessoa('Epilef', 72);
const p2 = new Pessoa('Jamelão', 69);

// console.log(p);
// console.log(p2);

Array.prototype.Epilef = function () {
    console.log(this);
}

// console.log(p.falar());
// console.log(p2.falar());

Array.prototype.teste = 'Teste';

// console.log(Array.prototype);
// console.log([1, 2, 3].__proto__);
// console.log([1, 2, 3].Epilef());
// console.log([1, 2, 3].teste);

if(Array.prototype.filterArray == 'function') {
    // Implementação externa "filterArray"

    Array.prototype.filterArray = function() {
        console.log(this);
    }

    console.log([1, 2, 3, 4, 5].filterArray());


}