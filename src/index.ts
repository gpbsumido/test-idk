import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
import { applyMixins } from "./utils";

class Refmint extends Base {}
interface Refmint extends Game,NFT {}

applyMixins(Refmint, [Game,NFT]);

export default Refmint;

export enum BaseURLOptions {
  LOCAL,
  TESTNET,
  MAINNET,
}