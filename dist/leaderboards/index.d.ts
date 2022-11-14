import { Base } from "../base";
export declare class Leaderboards extends Base {
    addScore(project_id: string, wallet_address: string, score: number): Promise<{
        project_id: string;
        wallet_address: string;
        score: number;
    }>;
    queryLeaderboard(project_id: string, order_by: string, top: number, skip: number): Promise<{
        project_id: string;
        order_by: string;
        top: number;
        skip: number;
    }>;
}
