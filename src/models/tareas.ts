import { Tarea } from './tarea';

export class Tareas {
  private _listado: any = {};

  get listado() {
    return Object.keys(this._listado).map((key) => this._listado[key]);
  }

  constructor() {
    this._listado = {};
  }

  crearTarea(desc: string) {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }
}
