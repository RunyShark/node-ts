"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tareas = void 0;
const tarea_1 = require("./tarea");
class Tareas {
    get listado() {
        return Object.keys(this._listado).map((key) => this._listado[key]);
    }
    constructor() {
        this._listado = {};
        this._listado = {};
    }
    setTareas(data) {
        data.forEach((issue) => (this._listado[issue.id] = issue));
    }
    crearTarea(desc) {
        const tarea = new tarea_1.Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}
exports.Tareas = Tareas;
//# sourceMappingURL=tareas.js.map