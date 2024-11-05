function teste() {
    const num = 5;
    return function () {
        return num;
    }
}

const valor = teste;

console.log(valor()());
console.log("------------------------- DIVISÃO -------------------------")

// ----------------------------------------------------------- //

function counter(num) {
    let acc = 0;

    return function() {
        acc = acc + num;

        return acc;
    }
}

const incrementOne = counter(1);

console.log(incrementOne());
console.log(incrementOne());
console.log(incrementOne());