"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
const game_1 = require("./game");
const nft_1 = require("./nft");
const utils_1 = require("./utils");
class Refmint extends base_1.Base {
}
(0, utils_1.applyMixins)(Refmint, [game_1.Game, nft_1.NFT]);
exports.default = Refmint;
