import { Base } from "./base";
import { Leaderboards } from "./leaderboards";
import { Project } from "./project";
declare class Refmint extends Base {
}
interface Refmint extends Leaderboards, Project {
}
export default Refmint;
