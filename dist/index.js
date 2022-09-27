import { Base } from "./base";
import { Project } from "./project";
import { applyMixins } from "./utils";
class Refmint extends Base {
}
applyMixins(Refmint, [Project]);
export default Refmint;
