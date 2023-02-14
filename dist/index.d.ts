import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
declare class GameClient extends Base {
}
interface GameClient extends Game {
}
declare class NFTClient extends Base {
}
interface NFTClient extends NFT {
}
declare const _default: {
    Game: typeof GameClient;
    NFT: typeof NFTClient;
};
export default _default;
export declare enum BaseURLOptions {
    LOCAL = 0,
    TESTNET = 1,
    MAINNET = 2
}
