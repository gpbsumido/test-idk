"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leaderboards = void 0;
const base_1 = require("../base");
class Leaderboards extends base_1.Base {
    addScore(wallet_address, score, project_id) {
        var params = {
            wallet_address: wallet_address,
            score: score,
            project_id: project_id
        };
        return this.postRequest(`/external/log-score`, params);
    }
    //todo: cap the top at 100
    //order by: referrals and score
    queryLeaderboard(order, top, skip, project_id) {
        var params = {
            order: order,
            top: top,
            skip: skip,
            project_id: project_id
        };
        return this.postRequest(`/external/leaderboard`, params);
    }
}
exports.Leaderboards = Leaderboards;
