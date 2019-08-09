const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');

        let tarea = porHacer.crear(argv.description);
        console.log(tarea);

        break;
    case 'listar':
        console.log('listar');
        let listado = porHacer.getListado();
        for (const tarea of listado) {
            console.log('===========Por hacer========='.green);
            console.log(tarea.descripcion + '  Estado:', tarea.completado);
            console.log("=============================".green);
        }
        break;
    case 'actualizar':
        console.log('actualizar');
        let actualizado = porHacer.actualizar(argv.description, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log('borrar');
        let borrado = porHacer.borrar(argv.description);
        console.log(borrado);

        break;
    default:
        console.log('comando no reconocido');

        break;
};