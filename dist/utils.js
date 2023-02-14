"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseURLOptions = exports.ORDER_BY_SELECTION = exports.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach((baseCtor) => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
            const baseCtorName = Object.getOwnPropertyDescriptor(baseCtor.prototype, name);
            if (!baseCtorName) {
                return;
            }
            Object.defineProperty(derivedCtor.prototype, name, baseCtorName);
        });
    });
}
exports.applyMixins = applyMixins;
exports.ORDER_BY_SELECTION = ['score', 'referral'];
var BaseURLOptions;
(function (BaseURLOptions) {
    BaseURLOptions[BaseURLOptions["LOCAL"] = 0] = "LOCAL";
    BaseURLOptions[BaseURLOptions["TESTNET"] = 1] = "TESTNET";
    BaseURLOptions[BaseURLOptions["MAINNET"] = 2] = "MAINNET";
})(BaseURLOptions = exports.BaseURLOptions || (exports.BaseURLOptions = {}));
