import { log, clear } from 'console';
import { CLIv2, Tareas, guardarDB } from './src';

clear();

(async () => {
  let opt: number;
  const tareas = new Tareas();

  do {
    opt = await CLIv2.inquirerMenu();

    switch (opt) {
      case 1: {
        const { desc } = await CLIv2.readInput('Descriptión: ');
        tareas.crearTarea(desc);
        break;
      }

      case 2: {
        log(tareas.listado);
        break;
      }
    }
    guardarDB(tareas.listado);
    await CLIv2.pause();
  } while (opt !== 0);
})();
