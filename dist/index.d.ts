import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
export declare class GameClient extends Base {
}
export interface GameClient extends Game {
}
export declare class NFTClient extends Base {
}
export interface NFTClient extends NFT {
}
export declare enum BaseURLOptions {
    LOCAL = 0,
    TESTNET = 1,
    MAINNET = 2
}
