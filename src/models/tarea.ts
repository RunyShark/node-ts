import { v4 as uuid } from 'uuid';
import { DBProps } from '.';

export class Tarea {
  id = '';
  desc = '';
  completadorEn: Date | null = null;

  constructor(desc: string) {
    this.id = uuid();
    this.desc = desc;
    this.completadorEn = null;
  }
}
