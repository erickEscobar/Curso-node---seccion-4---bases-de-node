const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { describe } = require('yargs');
const argv = yargs(hideBin(process.argv))
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla por consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta que numero multiplica' 
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    } else{
                        return true;
                    }
                })
                .argv;

module.exports = argv;