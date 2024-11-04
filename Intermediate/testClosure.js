function teste() {
    const num = 5;
    return function () {
        return num;
    }
}

const valor = teste;

console.log(valor()());