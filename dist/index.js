"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fingerprint = exports.BaseURLOptions = void 0;
const base_1 = require("./base");
const ua_1 = require("./ua");
const events_1 = require("./events");
const utils_1 = require("./utils");
const fingerprintjs_pro_react_1 = require("@fingerprintjs/fingerprintjs-pro-react");
class UA_INTERNAL extends base_1.Base {
}
(0, utils_1.applyMixins)(UA_INTERNAL, [ua_1.UA]);
class EVENTS_INTERNAL extends base_1.Base {
}
(0, utils_1.applyMixins)(EVENTS_INTERNAL, [events_1.EVENTS]);
exports.default = { EVENTS: EVENTS_INTERNAL, UA: UA_INTERNAL };
var BaseURLOptions;
(function (BaseURLOptions) {
    //UA_LOCAL,
    BaseURLOptions[BaseURLOptions["UA_DEV"] = 0] = "UA_DEV";
    BaseURLOptions[BaseURLOptions["UA_PROD"] = 1] = "UA_PROD";
    //EVENTS_LOCAL,
    BaseURLOptions[BaseURLOptions["EVENTS_DEV"] = 2] = "EVENTS_DEV";
    BaseURLOptions[BaseURLOptions["EVENTS_PROD"] = 3] = "EVENTS_PROD";
})(BaseURLOptions = exports.BaseURLOptions || (exports.BaseURLOptions = {}));
exports.fingerprint = fingerprintjs_pro_react_1.FingerprintJSPro;
