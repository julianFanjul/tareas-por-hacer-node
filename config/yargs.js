//35 - optimizaciones para la configuracion del yargs

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const opts1 = {
    descripcion
}

const opts2 = {
    descripcion,
    completado
}

const borrarDeLaDB = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', opts1)
    .command('actualizar', 'actualiza el estado completado de una tarea', opts2)
    .command('borrar', 'borra una tarea', borrarDeLaDB)
    .help()
    .argv;


module.exports = {
    argv
}