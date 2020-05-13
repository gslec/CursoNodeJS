function hola(nombre, miCallback) {
    console.log('Iniciando Proceso.');
    setTimeout(() => {
        console.log('Hola ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallBack) {
    setTimeout(() => {
        console.log('Adios ' + nombre);
        otroCallBack();
    }, 1000)
}

function hablar(callBackHablar) {
    setTimeout(() => {
        console.log('Bla, bla, bla...');
        callBackHablar()
    }, 1000)
}

hola('Ginnio', nombre => {
    hablar(() =>
        hablar(() =>
            hablar(() =>
                hablar(() =>
                    hablar(() =>
                        hablar(() =>
                            adios(nombre, () => {
                                console.log('Terminando proceso');
                            })
                        )
                    )
                )
            )
        )
    )
});