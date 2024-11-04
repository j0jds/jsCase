function segunda() {
    console.log('primeira');
    primeira();
}

function primeira () {
    console.log('segunda');
    segunda();
}

segunda();