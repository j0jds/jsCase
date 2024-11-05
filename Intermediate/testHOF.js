function j() {
    console.log('j');
    return 5;
}

function t(fn) {
    console.log('t');

    fn();
}

t(() => {
    console.log('anônimo');
});
