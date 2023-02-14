import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
import { applyMixins } from "./utils";

class GameInternal extends Base {}
interface GameInternal extends Game {}
applyMixins(GameInternal, [Game]);

class NFTInternal extends Base {}
interface NFTInternal extends NFT {}
applyMixins(NFTInternal, [NFT]);

export default { Game: GameInternal, NFT: NFTInternal }

export enum BaseURLOptions {
  LOCAL,
  TESTNET,
  MAINNET,
}