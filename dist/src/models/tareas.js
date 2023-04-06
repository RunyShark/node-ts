"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tareas = void 0;
const console_1 = require("console");
const tarea_1 = require("./tarea");
class Tareas {
    get listado() {
        return Object.keys(this._listado).map((key) => this._listado[key]);
    }
    constructor() {
        this._listado = {};
        this._listado = {};
    }
    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }
    listadoTareas() {
        this.listado.forEach(({ desc, completadorEn }, i) => (0, console_1.log)(`${i + 1}. ${desc} :: ${completadorEn ? 'complete' : 'pendiente'}`));
    }
    listarPendientesCompletadas(completadas) {
        this.listado.forEach(({ desc, completadorEn }, i) => {
            if (completadas && completadorEn) {
                (0, console_1.log)(`${i + 1}. ${desc} ::  complete`);
            }
            else if (!completadas && !completadorEn) {
                (0, console_1.log)(`${i + 1}. ${desc} ::  pendiente`);
            }
        });
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