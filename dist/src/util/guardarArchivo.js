"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guardarDB = void 0;
const fs_1 = require("fs");
const guardarDB = (data) => {
    const path = '../db/data';
    (0, fs_1.writeFileSync)(path, JSON.stringify(data));
};
exports.guardarDB = guardarDB;
//# sourceMappingURL=guardarArchivo.js.map