function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1000);

    });

}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Adios ' + nombre);
            resolve('FIN')
        }, 1000)
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bla, bla, bla...');
            resolve(nombre)
        }, 1000)
    })

}

console.log('Iniciando Proceso.');
hola('Ginnio')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then((nombre) => {
        adios(nombre)
        console.log('Terminado el proceso')
    })
    .catch(error => {
        console.error('Error: ' + error)
    })