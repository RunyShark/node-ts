"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pause = exports.mostrarMenu = void 0;
const readline_1 = __importDefault(require("readline"));
const console_1 = require("console");
const mostrarMenu = () => new Promise((resolve, reject) => {
    (0, console_1.clear)();
    (0, console_1.log)('=======================');
    (0, console_1.log)(' Seleccione una opción  ');
    (0, console_1.log)('=======================');
    (0, console_1.log)(`${'1.-'} Crear tarea`);
    (0, console_1.log)(`${'2.-'} Listar tareas`);
    (0, console_1.log)(`${'3.-'} Listar tareas completads`);
    (0, console_1.log)(`${'4.-'} Listar tareas pendientes`);
    (0, console_1.log)(`${'5.-'} Completar tarea(s)`);
    (0, console_1.log)(`${'6.-'} Borrar tarea`);
    (0, console_1.log)(`${'0.-'} Salir\n`);
    const input = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    input.question('Seleccione una optión: ', (opt) => {
        resolve(opt);
        input.close();
    });
});
exports.mostrarMenu = mostrarMenu;
const pause = () => new Promise((resolve, reject) => {
    const input = readline_1.default.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    input.question(`\nPrecione ${'ENTER'} para continuar:\n`, (opt) => {
        resolve();
        input.close();
    });
});
exports.pause = pause;
//# sourceMappingURL=mensajes.js.map