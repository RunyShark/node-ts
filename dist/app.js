"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const src_1 = require("./src");
(0, console_1.clear)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    let opt;
    const tareas = new src_1.Tareas();
    const leerDb = src_1.saveData.leerDb();
    if (leerDb)
        tareas.setTareas(leerDb);
    do {
        opt = yield src_1.CLIv2.inquirerMenu();
        switch (opt) {
            case 1: {
                const { desc } = yield src_1.CLIv2.readInput('Descriptión: ');
                tareas.crearTarea(desc);
                break;
            }
            case 2: {
                (0, console_1.log)(tareas.listado);
                break;
            }
        }
        src_1.saveData.guardarDB(tareas.listado);
        yield src_1.CLIv2.pause();
    } while (opt !== 0);
}))();
//# sourceMappingURL=app.js.map