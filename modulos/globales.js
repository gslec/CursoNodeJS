console.log('Inicio')
console.log(setInterval);

let i = 0
let intervalo = setInterval(()=>{
    if(i === 3){
        clearInterval(intervalo)
    }
    i++
    console.log('Hola');
},1000)

setImmediate(()=> {
    console.log('Inmediato')
})


setImmediate(()=> {
    console.log('Inmediato2')
})

console.log(__filename)

console.log(__dirname)

global.variablePepito = 'Pepito'

console.log(variablePepito)