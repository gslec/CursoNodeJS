// const p = require('process');


process.on('uncaughtException', (e)=>{
    console.log('Excepción sin Catch. MENSAJE => ' + e.message)
})

process.on('beforeExit', ()=>{
    console.log('El proceso va a terminar.')
})

process.on('exit', ()=>{
    console.log('El proceso acabo.')
})



console.log('Hola Mundo')

// funcionQueNoExiste();
// a = + z;

console.log(x);