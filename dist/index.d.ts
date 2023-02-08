import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
declare class Refmint extends Base {
}
interface Refmint extends Game, NFT {
}
export default Refmint;
export declare enum BaseURLOptions {
    LOCAL = 0,
    TESTNET = 1,
    MAINNET = 2
}
