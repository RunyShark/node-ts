import { Tarea } from './../models/tarea';
import { clear, log } from 'console';
import inquirer from 'inquirer';
import readline from 'readline';
import { DBProps } from '../models';

export const inquirerMenu = async () => {
  clear();

  log('=======================');
  log(' Seleccione una opción');
  log('=======================');
  const { opcion } = await inquirer.prompt([
    {
      type: 'list',
      name: 'opcion',
      message: 'Que desea hacer ?',
      choices: [
        { value: 1, name: 'Crear tarea' },
        { value: 2, name: 'Listar tareas' },
        { value: 3, name: 'Listar tareas completads' },
        { value: 4, name: 'Listar tareas pendientes' },
        { value: 6, name: 'Completar tarea(s)' },
        { value: 7, name: 'Borrar tarea' },
        { value: 0, name: 'Salir' },
      ],
    },
  ]);
  return opcion;
};

export const pause = async () =>
  await inquirer.prompt([
    {
      type: 'input',
      name: 'Continuar',
      message: `\nPrecione ${'ENTER'} para continuar:\n`,
    },
  ]);

export const readInput = async (message: string) => {
  const { desc } = await inquirer.prompt([
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value?.length === 0) return 'Por favor regrese un valor';
        return true;
      },
    },
  ]);
  return { desc };
};

export const listadoTareasBorrar = async (tarea: DBProps[]) => {
  const { id } = await inquirer.prompt([
    {
      type: 'list',
      name: 'id',
      message: 'Borrar',
      choices: tarea.map(({ id, desc }) => ({ value: id, name: desc })),
    },
  ]);
  log(id);
  return id;
};
