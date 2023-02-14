import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
import { applyMixins } from "./utils";

class GameClient extends Base {}
interface GameClient extends Game {}
applyMixins(GameClient, [Game]);

class NFTClient extends Base {}
interface NFTClient extends NFT {}
applyMixins(NFTClient, [NFT]);

export default { GameClient, NFTClient }

export enum BaseURLOptions {
  LOCAL,
  TESTNET,
  MAINNET,
}