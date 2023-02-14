import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
import { applyMixins } from "./utils";

export class GameClient extends Base {}
export interface GameClient extends Game {}
applyMixins(GameClient, [Game]);

export class NFTClient extends Base {}
export interface NFTClient extends NFT {}
applyMixins(NFTClient, [NFT]);

export enum BaseURLOptions {
  LOCAL,
  TESTNET,
  MAINNET,
}