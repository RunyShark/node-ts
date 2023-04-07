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
const fs_1 = __importDefault(require("fs"));
const existeArchivoOCarpeta = ({ path }) => {
    if (fs_1.default.existsSync(path)) {
        console.log('La carpeta existe en la ruta', path);
        return true;
    }
    else {
        console.log('La carpeta no existe en la ruta', path);
        return false;
    }
};
const crearCarpeta = ({ path }) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `${path}/store`;
    if (existeArchivoOCarpeta({ path: url }))
        return;
    try {
        fs_1.default.mkdirSync(url);
    }
    catch (error) {
        console.error(error);
    }
});
(() => {
    const path = './';
    try {
        crearCarpeta({ path });
    }
    catch (error) {
        console.error(error);
    }
})();
//# sourceMappingURL=app.js.map