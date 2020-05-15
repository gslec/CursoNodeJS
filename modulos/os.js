const os = require('os');
const SIZE = 1024
const kb = (bytes) => { return bytes / SIZE}
const mb = (bytes) => { return kb(bytes) / SIZE}
const gb = (bytes) => { return mb(bytes) / SIZE}



console.log(os.arch());
console.log(os.platform());
console.log('Cores:' + os.cpus().length);
console.log(os.constants);
console.log(gb(os.freemem()) + ' Gigas libres');

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces())

console.log(os.freemem())

