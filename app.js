// 28- inicio del proyecto
// 31- recibir informacion de la linea de comando
// https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
// crear archivos en el sistema 
//importar modulos

const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}

console.log(argv);

//let base = 6;s

//console.log(process.argv);
/*
let argv2 = process.argv;*/

/*console.log(argv.base);
console.log('limite ' + argv.limite);*/



/*let parametro = argv[2];
let base = parametro.split('=')[1];*/


//console.log(base);

/*
crearArchivo(base)
    .then(archivo => console.log(`archivo creado: ${ archivo }`))
    .catch(e => console.log(e));*/




