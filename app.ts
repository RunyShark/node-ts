/* eslint-disable @typescript-eslint/no-var-requires */
import { multiplicar, argv } from './src';

multiplicar({
  base: argv.b,
  numero: argv.n,
  logs: argv.l,
})
  .then((resp) => console.log('app.ts', resp))
  .catch((err) => console.log(err));
