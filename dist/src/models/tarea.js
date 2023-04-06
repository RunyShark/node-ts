"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
const uuid_1 = require("uuid");
class Tarea {
    constructor(desc) {
        this.id = '';
        this.desc = '';
        this.completadorEn = null;
        this.id = (0, uuid_1.v4)();
        this.desc = desc;
        this.completadorEn = null;
    }
}
exports.Tarea = Tarea;
//# sourceMappingURL=tarea.js.map