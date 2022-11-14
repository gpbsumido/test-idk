import { Base } from "../base";

export class Leaderboards extends Base {
  
  addScore(
    wallet_address: string,
    score: number,
    project_id: string
  ): Promise<{wallet_address: string, score: number, project_id: string}> {

    var params:{
      wallet_address: string,
      score: number,
      project_id: string
    } = { 
      wallet_address: wallet_address,
      score: score,
      project_id: project_id
    }

    return this.postRequest(`/external/log-score`,params);
  }

  //todo: cap the top at 100
  //order by: referrals and score
  queryLeaderboard(
    order: string,
    top: number,
    skip: number,
    project_id: string
  ): Promise<{order:string, top:number, skip:number, project_id: string}> {

    var params:{
      top: number,
      order: string,
      skip: number,
      project_id: string
    } = { 
      order: order,
      top: top,
      skip: skip,
      project_id: project_id
    }

    return this.postRequest(`/external/leaderboard`,params);
  }

}