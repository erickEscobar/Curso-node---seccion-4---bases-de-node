const colors = require('colors');

const crearArchivo = (base, listar, hasta) => {
    return new Promise((resolve, reject) => {
        if(listar){
            console.log('==============');
            console.log(` Tabla del: ${base}`.brightGreen);
            console.log('==============');
        }
        
        let salida = '', consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += base + " x " + i + " = " + (base*i) + '\n';
            consola += base + " x ".gray + i + " = ".brightRed + (base*i).toString().bold + '\n';
        }
    
        if(listar) console.log(consola);
    
        const { writeFile } = require('node:fs');
    
        writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            resolve(`tabla-${base}.txt creada`);
        });
        
    })
}

module.exports = {
    crearArchivo
}