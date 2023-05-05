"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const base_1 = require("../base");
const utils_1 = require("../utils");
class Game extends base_1.Base {
    //querying game project information
    isUser(custom_url, wallet_address) {
        var params = {
            custom_url: custom_url,
            wallet_address: wallet_address
        };
        return this.getRequest(`/sdk/game/is-user`, params);
    }
    userLinks(custom_url, wallet_address) {
        var params = {
            custom_url: custom_url,
            wallet_address: wallet_address
        };
        return this.getRequest(`/sdk/game/user-links`, params);
    }
    click(project_url, campaign_url, link_id) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
        };
        if (link_id)
            params.link_id = link_id;
        return this.postRequest(`/sdk/game/campaign/click`, params);
    }
    //querying campaign information
    leaderboard(project_url, campaign_url, order_by, //order by: referrals and score
    page_size, page, with_points_only) {
        if (!utils_1.ORDER_BY_SELECTION.includes(order_by)) {
            throw new Error("INVALID_ORDER_BY_SELECTION");
        }
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            order_by: order_by,
            page_size: page_size,
            page: page,
            with_points_only: with_points_only
        };
        return this.getRequest(`/sdk/game/campaign/leaderboard`, params);
    }
    userScore(project_url, campaign_url, wallet_address) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            wallet_address: wallet_address
        };
        return this.getRequest(`/sdk/game/campaign/user-score`, params);
    }
    modifyScore(project_url, campaign_url, users) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            users: users
        };
        return this.postRequest(`/sdk/game/campaign/modify-score`, params);
    }
    addUsers(project_url, campaign_url, users, link_id) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            users: users
        };
        if (link_id)
            params.link_id = link_id;
        return this.postRequest(`/sdk/game/campaign/add-users`, params);
    }
    referral(project_url, campaign_url, wallet_address, referral_only) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            wallet_address: wallet_address,
            referral_only: referral_only
        };
        return this.postRequest(`/sdk/game/campaign/referral`, params);
    }
    triggerEvent(project_url, campaign_url, wallet_address, event_hash, data) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            wallet_address: wallet_address,
            event_hash: event_hash,
            data: data
        };
        return this.postRequest(`/sdk/game/campaign/event`, params);
    }
    //claimRewards(
    //  project_url: string,
    //  campaign_url: string,
    //  wallet_address: string,
    //  nonce: string
    //): Promise<{
    //  reward_ids: string[],
    //  contract_types: string[],
    //  amounts: string[],
    //  nonce: string,
    //  signature: string,
    //}> {
    //  var params:{
    //    project_url: string,
    //    campaign_url: string,
    //    wallet_address: string,
    //    nonce: string
    //  } = {
    //    project_url: project_url,
    //    campaign_url: campaign_url,
    //    wallet_address: wallet_address,
    //    nonce: nonce
    //  }
    //  return this.postRequest(`/sdk/game/campaigns/reward/claim`,params);
    //}
    rewards(project_url, campaign_url, wallet_address, page_size, //min 5, default 10
    page //min 1, default 1
    ) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            wallet_address: wallet_address
        };
        if (page_size)
            params.page_size = page_size;
        if (page)
            params.page = page;
        return this.getRequest(`/sdk/game/campaign/rewards`, params);
    }
    rewardConditions(project_url, campaign_url, page_size, //min 5, default 10
    page //min 1, default 1
    ) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
        };
        if (page_size)
            params.page_size = page_size;
        if (page)
            params.page = page;
        return this.getRequest(`/sdk/game/campaign/reward-conditions`, params);
    }
    userRewards(project_url, campaign_url, wallet_address) {
        var params = {
            project_url: project_url,
            campaign_url: campaign_url,
            wallet_address: wallet_address,
        };
        return this.getRequest(`/sdk/game/campaign/user-rewards`, params);
    }
    addTagToUser(project_url, wallet_address, tag) {
        var params = {
            project_url: project_url,
            wallet_address: wallet_address,
            tag: tag,
        };
        return this.postRequest(`/sdk/game/add-tag`, params);
    }
    removeTagFromUser(project_url, wallet_address, tag) {
        var params = {
            project_url: project_url,
            wallet_address: wallet_address,
            tag: tag,
        };
        return this.postRequest(`/sdk/game/remove-tag`, params);
    }
    getWalletsFromTags(project_url, tags) {
        var params = {
            project_url: project_url,
            tags: tags
        };
        return this.getRequest(`/sdk/game/wallets-from-tag`, params);
    }
}
exports.Game = Game;
