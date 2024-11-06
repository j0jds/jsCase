function contagem(n) {
// se n for 0, a função para. 
    if (n === 0) {
        console.log('fim da contagem.');
        return;
    } 
// imprime o número atual.
    console.log(n);
// chama a si mesma com o próximo valor (n - 1).
    contagem(n - 1);
}
// executa a contagem regressiva começando de 10.
contagem(3);