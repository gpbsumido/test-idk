import { Base } from "../base";
export declare class Game extends Base {
    isUser(custom_url: string, wallet_address: string): Promise<boolean>;
    userLinks(custom_url: string, wallet_address: string): Promise<{
        referral_link: string;
        referral_id: string;
    }>;
    click(project_url: string, campaign_url: string, link_id?: string): Promise<void>;
    leaderboard(project_url: string, campaign_url: string, order_by: string, //order by: referrals and score
    page_size: number, page: number, with_points_only: boolean): Promise<{
        wallet_address: string;
        score: number;
        referral: string;
    }[]>;
    userScore(project_url: string, campaign_url: string, wallet_address: string): Promise<{
        wallet_address: string;
        score: number;
        referral: string;
    }>;
    modifyScore(project_url: string, campaign_url: string, users: {
        wallet_address: string;
        score: number;
    }[]): Promise<void>;
    addUsers(project_url: string, campaign_url: string, users: {
        wallet_address: string;
        score: number;
        referral: number;
    }[], link_id?: string): Promise<{
        wallet_address: string;
        referral_link: string;
        referral_id: string;
    }[]>;
    referral(project_url: string, campaign_url: string, wallet_address: string, referral_only: boolean): Promise<void>;
    triggerEvent(project_url: string, campaign_url: string, wallet_address: string, event_hash: string, data: string): Promise<void>;
    rewards(project_url: string, campaign_url: string, page_size?: string, //min 5, default 10
    page?: string): Promise<any[]>;
    rewardConditions(project_url: string, campaign_url: string, page_size?: string, //min 5, default 10
    page?: string): Promise<any[]>;
    userRewards(project_url: string, campaign_url: string, wallet_address: string): Promise<any[]>;
    addTagToUser(project_url: string, wallet_address: string, tag: string): Promise<void>;
    removeTagFromUser(project_url: string, wallet_address: string, tag: string): Promise<void>;
    getWalletsFromTags(project_url: string, tags: string[]): Promise<any[]>;
}
