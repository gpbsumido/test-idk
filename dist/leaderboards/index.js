"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboards = void 0;
const base_1 = require("../base");
const utils_1 = require("../utils");
class Leaderboards extends base_1.Base {
    addScore(project_id, wallet_address, score) {
        var params = {
            project_id: project_id,
            wallet_address: wallet_address,
            score: score
        };
        return this.getRequest(`/external/leaderboard/add-score`, params);
    }
    //todo: cap the top at 100
    //order by: referrals and score
    queryLeaderboard(project_id, order_by, top, skip) {
        if (!utils_1.ORDER_BY_SELECTION.includes(order_by)) {
            throw new Error("INVALID_ORDER_BY_SELECTION");
        }
        var params = {
            project_id: project_id,
            order_by: order_by,
            top: top,
            skip: skip
        };
        return this.postRequest(`/external/leaderboard`, params);
    }
}
exports.Leaderboards = Leaderboards;
