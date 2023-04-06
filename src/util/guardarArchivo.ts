import { log } from 'console';
import fs from 'fs';
import { DBProps } from '..';

const path = '.../../db/data.json';

export const guardarDB = (data: DBProps[]) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

export const leerDb = (): DBProps[] | null => {
  if (!fs.existsSync(path)) return null;
  return JSON.parse(fs.readFileSync(path, { encoding: 'utf-8' }));
};
