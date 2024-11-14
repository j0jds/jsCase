// O "this" da arrow function será definido no momento da sua criação. Ela vai herdar o "this" do seu contexto pai.

// -------------------------------------------------------------------- //

// 1
// const obj = {
//     nome: 'Epilef',
//     falar: () => {
//         console.log(this); // window
//         setTimeout(() => {
//             console.log('setTimeout ', this);
//         }, 1000)
//     }
// };
// obj.falar();

// -------------------------------------------------------------------- //

// 2
// Lembrando: não é possível criar uma instância utilizando arrow function!
const Pessoa = function() {
    this.nome = 'Epilef';
    this.falar = () => {
        console.log('Falar ===>', this);
    }
    console.log('Pessoa ===>', this);
}

const p = new Pessoa();
p.falar(); 

// -------------------------------------------------------------------- //

// Nesse caso, o root é o contexto pai da minha arrow function.
console.log('this 1', this);
const arrow = () => {
    console.log('arrow', this);
}

arrow();
