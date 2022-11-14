import { Base } from "../base";
export declare class Leaderboards extends Base {
    addScore(wallet_address: string, score: number, project_id: string): Promise<{
        wallet_address: string;
        score: number;
        project_id: string;
    }>;
    queryLeaderboard(order: string, top: number, skip: number, project_id: string): Promise<{
        order: string;
        top: number;
        skip: number;
        project_id: string;
    }>;
}
