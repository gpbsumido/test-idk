import { Base } from "./base";
import { Project } from "./project";
import { applyMixins } from "./utils";

class Refmint extends Base {}
interface Refmint extends Project {}

applyMixins(Refmint, [Project]);

export default Refmint;