import { Base } from "../base";
import { ORDER_BY_SELECTION } from "../utils";

export class Leaderboards extends Base {
  
  addScore(
    project_id: string,
    wallet_address: string,
    score: number
  ): Promise<{project_id: string, wallet_address: string, score: number}> {

    var params:{
      project_id: string,
      wallet_address: string,
      score: number
    } = { 
      project_id: project_id,
      wallet_address: wallet_address,
      score: score
    }

    return this.getRequest(`/external/leaderboard/add-score`,params);
  }

  //todo: cap the top at 100
  //order by: referrals and score
  queryLeaderboard(
    project_id: string,
    order_by: string,
    top: number,
    skip: number
  ): Promise<{project_id: string, order_by:string, top:number, skip:number}> {

    if (!ORDER_BY_SELECTION.includes(order_by)) {
      throw new Error("INVALID_ORDER_BY_SELECTION");
    }

    var params:{
      project_id: string,
      order_by: string,
      top: number,
      skip: number
    } = { 
      project_id: project_id,
      order_by: order_by,
      top: top,
      skip: skip
    }

    return this.postRequest(`/external/leaderboard`,params);
  }

}