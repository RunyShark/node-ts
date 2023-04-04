"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
const src_1 = require("./src");
(0, src_1.multiplicar)({
    base: src_1.argv.b,
    numero: src_1.argv.n,
    logs: src_1.argv.l,
})
    .then((resp) => console.log('app.ts', resp))
    .catch((err) => console.log(err));
//# sourceMappingURL=app.js.map