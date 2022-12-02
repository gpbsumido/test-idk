"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboards = void 0;
const base_1 = require("../base");
const utils_1 = require("../utils");
class Leaderboards extends base_1.Base {
    modifyScore(custom_url, wallet_address, score) {
        var params = {
            custom_url: custom_url,
            wallet_address: wallet_address,
            score: score
        };
        return this.getRequest(`/external/leaderboard/modify-score`, params);
    }
    //order by: referrals and score
    queryLeaderboard(custom_url, order_by, page_size, page, with_points_only) {
        if (!utils_1.ORDER_BY_SELECTION.includes(order_by)) {
            throw new Error("INVALID_ORDER_BY_SELECTION");
        }
        var params = {
            custom_url: custom_url,
            order_by: order_by,
            page_size: page_size,
            page: page,
            with_points_only: with_points_only
        };
        return this.postRequest(`/external/leaderboard`, params);
    }
    myScore(custom_url, wallet_address) {
        var params = {
            custom_url: custom_url,
            wallet_address: wallet_address
        };
        return this.getRequest(`/external/leaderboard/user`, params);
    }
}
exports.Leaderboards = Leaderboards;
