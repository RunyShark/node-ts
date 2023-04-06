import { Tarea } from './tarea';

export interface DBProps {
  id: string;
  desc: string;
  completadorEn: boolean | null;
}

interface listadoProps {
  [key: string]: DBProps;
}

export class Tareas {
  private _listado: listadoProps = {};

  get listado(): DBProps[] {
    return Object.keys(this._listado).map((key) => this._listado[key]);
  }

  constructor() {
    this._listado = {};
  }

  setTareas(data: DBProps[]) {
    data.forEach((issue) => (this._listado[issue.id] = issue));
  }

  crearTarea(desc: string) {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea as DBProps;
  }
}
