import { writeFileSync } from 'fs';

export const guardarDB = (data: any) => {
  const path = '../db/data.txt';
  writeFileSync(path, JSON.stringify(data));
};
