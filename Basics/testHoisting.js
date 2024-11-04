catName("Gatinho");

function catName(name) {
    console.log("O nome do meu gato é " + name);
}

catName("Gatinho");

// Exemplo prático com execução de contexto . Nota-se que o JavaScript não possui
// ordenamento para declarações, pois se eu chamar uma função antes ou depois dela,
// o código funcionará exatamente da mesma maneira.

// Acontece que isso é um Hoisting (içamento). 
