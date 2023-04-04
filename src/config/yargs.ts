/* eslint-disable @typescript-eslint/no-var-requires */
export const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar',
  })
  .option('n', {
    alias: 'numero',
    type: 'number',
    default: 10,
    demandOption: false,
    describe: 'El numero maximo a multiplicar',
  })
  .option('l', {
    alias: 'logs',
    type: 'boolean',
    default: false,
    describe: 'Muestra los logs, true se muestran false no se muestran',
  })
  .check((argv: { b: number }, option: any) => {
    if (isNaN(argv.b)) throw 'La base debe de ser un numero';
    return true;
  }).argv;
