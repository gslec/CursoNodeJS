const otraFuncion = () => {
    return seRompe()
}

const seRompe = () => {
    return 3 + z;
}

const seRompeAsincrona = () => {

    setTimeout(() => {
        try {
            return 3 + z;
        } catch (error) {
            console.log('Desde la funcion asincrona => ' + error.message);
        }
    }, 1000)
}

try {
    seRompeAsincrona();
} catch (err) {
    console.error('ATENCION! => ' + err.message)
}

console.log('*** FINAL DEL PROGRAMA ***')