console.clear();

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

const base = argv.b;
const listar = argv.l;
const hasta = argv.h;
console.log(argv, base, listar, hasta)

// Recibir informacion desde linea de comando
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// console.log(base);

 
crearArchivo(base, listar, hasta)
.then(msg => {
    console.log(msg);
})
.catch(err => {
    console.log(err);
})



