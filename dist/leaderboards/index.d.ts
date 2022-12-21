import { Base } from "../base";
export declare class Leaderboards extends Base {
    modifyScore(custom_url: string, campaign_url: string, wallet_address: string, score: number): Promise<string | null>;
    queryLeaderboard(custom_url: string, campaign_url: string, order_by: string, page_size: number, page: number, with_points_only: boolean): Promise<{
        _id: string;
        project_id: string;
        wallet_address: string;
        score: number;
        referral: string;
        updated_at: string;
        created_at: string;
    }>;
    myScore(custom_url: string, campaign_url: string, wallet_address: string): Promise<number>;
}
