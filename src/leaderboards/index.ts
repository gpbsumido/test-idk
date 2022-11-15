import { Base } from "../base";
import { ORDER_BY_SELECTION } from "../utils";

export class Leaderboards extends Base {
  
  addScore(
    custom_url: string,
    wallet_address: string,
    score: number
  ): Promise<{custom_url: string, wallet_address: string, score: number}> {

    var params:{
      custom_url: string,
      wallet_address: string,
      score: number
    } = { 
      custom_url: custom_url,
      wallet_address: wallet_address,
      score: score
    }

    return this.getRequest(`/external/leaderboard/add-score`,params);
  }

  //order by: referrals and score
  queryLeaderboard(
    custom_url: string,
    order_by: string,
    page_size: number,
    page: number,
    with_points_only: boolean
  ): Promise<{custom_url: string, order_by: string, page_size: number, page: number, with_points_only: boolean}> {

    if (!ORDER_BY_SELECTION.includes(order_by)) {
      throw new Error("INVALID_ORDER_BY_SELECTION");
    }

    var params:{
      custom_url: string,
      order_by: string,
      page_size: number,
      page: number,
      with_points_only: boolean
    } = { 
      custom_url: custom_url,
      order_by: order_by,
      page_size: page_size,
      page: page,
      with_points_only: with_points_only
    }

    return this.postRequest(`/external/leaderboard`,params);
  }
  
  myScore(
    custom_url: string,
    wallet_address: string
  ): Promise<{custom_url: string, wallet_address: string}> {

    var params:{
      custom_url: string,
      wallet_address: string
    } = { 
      custom_url: custom_url,
      wallet_address: wallet_address
    }

    return this.getRequest(`/external/leaderboard/user`,params);
  }

}