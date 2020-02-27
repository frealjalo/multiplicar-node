// const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(console.log(`Listada la tabla del: ${argv.base}`.red))
            .catch(e => console.log(e));
        break;
    case 'crear':
        colors.setTheme({
            custom: ['red', 'green']
        });
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado: '.red + `${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

/* let parametro = process.argv[2]

let base = parametro.split('=')[1]

let data = '';

for (let i = 1; i <= 10; i++) {

    data += `${ base } x ${ i } = ${ base*i }\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`The file tabla-${base}.txt has been saved!`);
}); */