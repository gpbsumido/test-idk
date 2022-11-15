import { Base } from "../base";
export declare class Leaderboards extends Base {
    addScore(custom_url: string, wallet_address: string, score: number): Promise<{
        custom_url: string;
        wallet_address: string;
        score: number;
    }>;
    queryLeaderboard(custom_url: string, order_by: string, page_size: number, page: number, with_points_only: boolean): Promise<{
        custom_url: string;
        order_by: string;
        page_size: number;
        page: number;
        with_points_only: boolean;
    }>;
}
