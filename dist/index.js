"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const leaderboards_1 = require("./leaderboards");
const project_1 = require("./project");
const utils_1 = require("./utils");
class Refmint extends base_1.Base {
}
(0, utils_1.applyMixins)(Refmint, [leaderboards_1.Leaderboards, project_1.Project]);
exports.default = Refmint;
