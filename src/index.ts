import { Base } from "./base";
import { Leaderboards } from "./leaderboards";
import { Project } from "./project";
import { applyMixins } from "./utils";

class Refmint extends Base {}
interface Refmint extends Leaderboards,Project {}

applyMixins(Refmint, [Leaderboards,Project]);

export default Refmint;