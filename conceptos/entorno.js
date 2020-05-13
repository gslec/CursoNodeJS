let nombre = process.env.NOMBRE || '[Sin nombre] Asigna un valor a la variable de entorno: NOMBRE';
let web = process.env.WEB || 'no tengo Web'
let d = new Date();

console.log("Hola " + nombre);
console.log('Mi web es: ' + web);
console.log('Pequeño cambio');
console.log(d);