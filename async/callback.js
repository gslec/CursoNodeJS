function hola(nombre, miCallback) {
    console.log('Iniciando Proceso.');
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallBack) {
    setTimeout(() => {
        console.log('Adios ' + nombre)
        otroCallBack()
    }, 1000)
}

hola('Ginnio', function (nombre) {
    adios(nombre, function () {
        console.log('Terminando proceso');
    })
});

