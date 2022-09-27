"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const project_1 = require("./project");
const utils_1 = require("./utils");
class Refmint extends base_1.Base {
}
(0, utils_1.applyMixins)(Refmint, [project_1.Project]);
exports.default = Refmint;
