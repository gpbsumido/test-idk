import { Base } from "./base";
import { UA } from "./ua";
import { EVENTS } from "./events";
import { FingerprintJSPro } from "@fingerprintjs/fingerprintjs-pro-react";
declare class UA_INTERNAL extends Base {
}
interface UA_INTERNAL extends UA {
}
declare class EVENTS_INTERNAL extends Base {
}
interface EVENTS_INTERNAL extends EVENTS {
}
declare const _default: {
    EVENTS: typeof EVENTS_INTERNAL;
    UA: typeof UA_INTERNAL;
};
export default _default;
export declare enum BaseURLOptions {
    UA_DEV = 0,
    UA_PROD = 1,
    EVENTS_DEV = 2,
    EVENTS_PROD = 3
}
export declare const fingerprint: typeof FingerprintJSPro;
