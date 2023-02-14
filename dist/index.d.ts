import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
declare class GameInternal extends Base {
}
interface GameInternal extends Game {
}
declare class NFTInternal extends Base {
}
interface NFTInternal extends NFT {
}
declare const _default: {
    Game: typeof GameInternal;
    NFT: typeof NFTInternal;
};
export default _default;
export declare enum BaseURLOptions {
    LOCAL = 0,
    TESTNET = 1,
    MAINNET = 2
}
