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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readInput = exports.pause = exports.inquirerMenu = void 0;
const console_1 = require("console");
const inquirer_1 = __importDefault(require("inquirer"));
const inquirerMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    (0, console_1.clear)();
    (0, console_1.log)('=======================');
    (0, console_1.log)(' Seleccione una opción');
    (0, console_1.log)('=======================');
    const { opcion } = yield inquirer_1.default.prompt([
        {
            type: 'list',
            name: 'opcion',
            message: 'Que desea hacer ?',
            choices: [
                { value: 1, name: 'Crear tarea' },
                { value: 2, name: 'Listar tareas' },
                { value: 3, name: 'Listar tareas completads' },
                { value: 4, name: 'Listar tareas pendientes' },
                { value: 6, name: 'Completar tarea(s)' },
                { value: 7, name: 'Borrar tarea' },
                { value: 0, name: 'Salir' },
            ],
        },
    ]);
    return opcion;
});
exports.inquirerMenu = inquirerMenu;
const pause = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'Continuar',
            message: `\nPrecione ${'ENTER'} para continuar:\n`,
        },
    ]);
});
exports.pause = pause;
const readInput = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const { desc } = yield inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if ((value === null || value === void 0 ? void 0 : value.length) === 0)
                    return 'Por favor regrese un valor';
                return true;
            },
        },
    ]);
    return { desc };
});
exports.readInput = readInput;
//# sourceMappingURL=inquirer.js.map