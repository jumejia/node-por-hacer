const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const argv = require('yargs')
    .command('crear', 'Crear elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualizar elemento por hacer', {
        description,
        completado: {
            demand: true,
            alias: 'c',
            description: "Marca como completado o pendiente la tarea"
        }
    })
    .command('borrar', 'borrar elmento por hacer', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}