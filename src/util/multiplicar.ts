import fs from 'fs';
import { log } from 'console';
import colors from 'colors';

type Multiplicar = {
  base: number;
  numero: number;
  logs: boolean;
};

export const multiplicar = async ({
  base,
  numero,
  logs,
}: Multiplicar): Promise<string> =>
  new Promise((resolve, reject) => {
    if (!base || !numero) reject('Los valores base y numero son obligatorios');
    logs &&
      log(
        colors.rainbow(`=============\n Tabla del: ${+base} \n=============`)
      );
    let salida = '';
    for (let i = 0; i < numero; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    resolve(`tabla-${base}.txt creada`);
  });
