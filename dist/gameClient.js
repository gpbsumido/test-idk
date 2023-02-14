"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const game_1 = require("./game");
const utils_1 = require("./utils");
class GameClient extends base_1.Base {
}
(0, utils_1.applyMixins)(GameClient, [game_1.Game]);
exports.default = GameClient;
