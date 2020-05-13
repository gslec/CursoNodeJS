const fs = require('fs');

const leer = (ruta, cb) => {
    fs.readFile(ruta, (err, data) => {
        if (err) {
            console.error('No he podido abrirlo =>', err);

        } else {
            console.log('Leido exitosamente')
            cb(data.toString())
        }
        
    })
}

const escribir = (ruta, contenido, cb) => {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No he podido escribir =>', err);

        } else {
            console.log('Escrito exitosamente')
            cb(data.toString())
        }
    })
}

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);
}


escribir(__dirname + '/archivo.txt', 'Escrita por Ginnio', console.log);
leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo.txt', console.log);