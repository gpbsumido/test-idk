"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseURLOptions = void 0;
const base_1 = require("./base");
const game_1 = require("./game");
const nft_1 = require("./nft");
const utils_1 = require("./utils");
class GameClient extends base_1.Base {
}
(0, utils_1.applyMixins)(GameClient, [game_1.Game]);
class NFTClient extends base_1.Base {
}
(0, utils_1.applyMixins)(NFTClient, [nft_1.NFT]);
exports.default = { GameClient, NFTClient };
var BaseURLOptions;
(function (BaseURLOptions) {
    BaseURLOptions[BaseURLOptions["LOCAL"] = 0] = "LOCAL";
    BaseURLOptions[BaseURLOptions["TESTNET"] = 1] = "TESTNET";
    BaseURLOptions[BaseURLOptions["MAINNET"] = 2] = "MAINNET";
})(BaseURLOptions = exports.BaseURLOptions || (exports.BaseURLOptions = {}));
