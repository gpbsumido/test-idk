import { Base } from "./base";
import { Game } from "./game";
import { NFT } from "./nft";
declare class GameClient extends Base {
}
interface GameClient extends Game, NFT {
}
export default GameClient;
