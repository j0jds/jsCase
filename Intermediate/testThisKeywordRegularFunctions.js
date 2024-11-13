/** Com functions regulares nós temos 4 opções de comportamento do "this":
 * 
 * 1 - Caso esteja em um método de um objeto, ela vai apontar para esse objeto.
 * 2 - Caso esteja em uma instância de um objeto, ela vai apontar para essa instância.
 * 3 - Caso esteja em uma função regular que não está diretamente ligada a um objeto, ela vai apontar para o objeto "window" ou "global" (Node.js).
 * * - Caso esteja sendo utilizado o "use strict" o "this" fica undefined. É necessário utilizar o "window".
 * 4 - Caso esteja em uma função que foi chamada via "call()", "apply()" ou "bind()", ela vai apontar para o objeto do primeiro parâmetro dessas funções.*/ 


// 1
const pessoa = {
    nome: 'Epilef',
    falar() {
        console.log(this.nome);
    },
}

pessoa.falar();

// 2
const carro = function(modelo) {
    this.modelo = modelo;
    this.acelerar = function() {
        console.log(this.modelo)
    };
};

const c = new carro ('BMW');
c.acelerar();

// 3
"use strict"
function logar() {
    console.log(this);
}

logar();