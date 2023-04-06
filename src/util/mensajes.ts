import readline from 'readline';
import { log, clear } from 'console';

export type AccionType = '0' | '1' | '2' | '3' | '4' | '5' | '6';

export const mostrarMenu = () =>
  new Promise<AccionType>((resolve, reject) => {
    clear();
    log('=======================');
    log(' Seleccione una opción  ');
    log('=======================');

    log(`${'1.-'} Crear tarea`);
    log(`${'2.-'} Listar tareas`);
    log(`${'3.-'} Listar tareas completads`);
    log(`${'4.-'} Listar tareas pendientes`);
    log(`${'5.-'} Completar tarea(s)`);
    log(`${'6.-'} Borrar tarea`);
    log(`${'0.-'} Salir\n`);

    const input = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    input.question('Seleccione una optión: ', (opt) => {
      resolve(opt as AccionType);

      input.close();
    });
  });

export const pause = () =>
  new Promise<void>((resolve, reject) => {
    const input = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    input.question(`\nPrecione ${'ENTER'} para continuar:\n`, (opt) => {
      resolve();
      input.close();
    });
  });
