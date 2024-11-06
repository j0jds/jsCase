// for

for (i = 0; i < 20; i++) {
    console.log(i);
}

// --------------------------------------------- //

// infinity loop

function segunda() {
    console.log('xau');
    for (i = 0; i < 10; i++) {
        console.log(i);
    }
    primeira();
}

function primeira () {
    console.log("oi");
    segunda();
}
debugger;
segunda();
