const pessoa = {
    nome: 'Epilef',
    falar() {
        console.log(this.nome);
    },
}

pessoa.falar();

const carro = function(modelo) {
    this.modelo = modelo;
    this.acelerar = function() {
        console.log(this.modelo)
    };
};

const c = new carro ('BMW');
c.acelerar();