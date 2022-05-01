const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base, listar = false, hasta=10) => {

    try {

        let salida = '';
        let consola = '';

        for (let index = 0; index < hasta; index++) {
            salida += (`${colors.magenta(base)} ${'x'.yellow} ${colors.cyan(index + 1)} ${'='.red} ${colors.green(base * (index + 1))}\n`);
            consola += (`${base} x ${index + 1} = ${base * (index + 1)}\n`);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);

        if (listar) {
            console.log('========================'.rainbow);
            console.log('Tabla del:'.cyan, colors.magenta(base));
            console.log('========================'.rainbow);
            console.log(salida);
        }

        return `tabla-${base}.txt`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}