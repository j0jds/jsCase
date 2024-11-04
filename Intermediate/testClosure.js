function teste() {
    return function () {
        return 5;
    }
}

const valor = teste;

console.log(valor()());