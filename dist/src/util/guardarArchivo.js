"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerDb = exports.guardarDB = void 0;
const fs_1 = __importDefault(require("fs"));
const path = '.../../db/data.json';
const guardarDB = (data) => {
    fs_1.default.writeFileSync(path, JSON.stringify(data));
};
exports.guardarDB = guardarDB;
const leerDb = () => {
    if (!fs_1.default.existsSync(path))
        return null;
    return JSON.parse(fs_1.default.readFileSync(path, { encoding: 'utf-8' }));
};
exports.leerDb = leerDb;
//# sourceMappingURL=guardarArchivo.js.map