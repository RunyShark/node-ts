import { log, clear } from 'console';
import { CLIv2, Tareas, saveData } from './src';

clear();

(async () => {
  let opt: number;
  const tareas = new Tareas();
  const leerDb = saveData.leerDb();

  if (leerDb) tareas.setTareas(leerDb);

  do {
    opt = await CLIv2.inquirerMenu();
    log(opt);
    switch (opt) {
      case 1: {
        const { desc } = await CLIv2.readInput('Descriptión: ');
        tareas.crearTarea(desc);
        break;
      }

      case 2: {
        log(tareas.listadoTareas());
        break;
      }

      case 3: {
        log(tareas.listarPendientesCompletadas(true));
        break;
      }

      case 4: {
        log(tareas.listarPendientesCompletadas(false));
        break;
      }

      case 7: {
        tareas.borrarTarea(await CLIv2.listadoTareasBorrar(tareas.listado));
        break;
      }
    }
    saveData.guardarDB(tareas.listado);
    await CLIv2.pause();
  } while (opt !== 0);
})();
