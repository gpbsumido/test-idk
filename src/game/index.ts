import { Base } from "../base";
import { ORDER_BY_SELECTION } from "../utils";

export class Game extends Base {
  //querying game project information
  
  isUser(
    custom_url: string,
    wallet_address: string
  ): Promise<boolean> {

    var params:{
      custom_url: string,
      wallet_address: string
    } = { 
      custom_url: custom_url,
      wallet_address: wallet_address
    }

    return this.getRequest(`/sdk/game/is-user`,params);
  }

  userLinks(
    custom_url: string,
    wallet_address: string
  ): Promise<{
    referral_link: string,
    referral_id: string
  }> {

    var params:{
      custom_url: string,
      wallet_address: string
    } = { 
      custom_url: custom_url,
      wallet_address: wallet_address
    }

    return this.getRequest(`/sdk/game/user-links`,params);
  }

  click(
    project_url: string,
    campaign_url: string,
    link_id?: string
  ): Promise<void> {

    var params:{
      project_url: string,
      campaign_url: string,
      link_id?: string
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
    }
    if (link_id) params.link_id = link_id

    return this.postRequest(`/sdk/game/campaign/click`,params);
  }

  //querying campaign information

  leaderboard(
    project_url: string,
    campaign_url: string,
    order_by: string, //order by: referrals and score
    page_size: number,
    page: number,
    with_points_only: boolean
  ): Promise<{
      wallet_address: string,
      score: number,
      referral: string
  }[]> {
    if (!ORDER_BY_SELECTION.includes(order_by)) {
      throw new Error("INVALID_ORDER_BY_SELECTION");
    }

    var params:{
      project_url: string,
      campaign_url: string,
      order_by: string,
      page_size: number,
      page: number,
      with_points_only: boolean
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      order_by: order_by,
      page_size: page_size,
      page: page,
      with_points_only: with_points_only
    }

    return this.getRequest(`/sdk/game/campaign/leaderboard`,params);
  }
  
  userScore(
    project_url: string,
    campaign_url: string,
    wallet_address: string
  ): Promise<{
      wallet_address: string,
      score: number,
      referral: string
  }> {

    var params:{
      project_url: string,
      campaign_url: string,
      wallet_address: string
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      wallet_address: wallet_address
    }

    return this.getRequest(`/sdk/game/campaign/user-score`,params);
  }

  modifyScore(
    project_url: string,
    campaign_url: string,
    users: {
      wallet_address: string,
      score: number
    }[]
  ): Promise<void> {

    var params:{
      project_url: string,
      campaign_url: string,
      users: {
        wallet_address: string,
        score: number //score is added/subtracted, not set as a value
      }[]
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      users: users
    }

    return this.postRequest(`/sdk/game/campaign/modify-score`,params);
  }
  
  addUsers(
    project_url: string,
    campaign_url: string,
    users: {
      wallet_address: string,
      score: number,
      referral: number
    }[],
    link_id?: string
  ): Promise<{
    wallet_address: string,
    referral_link: string,
    referral_id: string
  }[]> {

    var params:{
      project_url: string,
      campaign_url: string,
      users: {
        wallet_address: string,
        score: number,
        referral: number
      }[],
      link_id?: string
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      users: users
    }

    if (link_id) params.link_id = link_id;

    return this.postRequest(`/sdk/game/campaign/add-users`,params);
  }

  referral(
    project_url: string,
    campaign_url: string,
    wallet_address: string,
    referral_only: boolean
  ): Promise<void> {

    var params:{
      project_url: string,
      campaign_url: string,
      wallet_address: string,
      referral_only: boolean
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      wallet_address: wallet_address,
      referral_only: referral_only
    }

    return this.postRequest(`/sdk/game/campaign/referral`,params);
  }

  triggerEvent(
    project_url: string,
    campaign_url: string,
    wallet_address: string,
    event_hash: string,
    data: string
  ): Promise<void> {

    var params:{
      project_url: string,
      campaign_url: string,
      wallet_address: string,
      event_hash: string,
      data: string
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      wallet_address: wallet_address,
      event_hash: event_hash,
      data: data
    }
    
    return this.postRequest(`/sdk/game/campaign/event`,params);
  }

  claimRewards(
    project_url: string,
    campaign_url: string,
    wallet_address: string,
    nonce: string
  ): Promise<{
    reward_ids: string[],
    contract_types: string[],
    amounts: string[],
    nonce: string,
    signature: string,
  }> {

    var params:{
      project_url: string,
      campaign_url: string,
      wallet_address: string,
      nonce: string
    } = {
      project_url: project_url,
      campaign_url: campaign_url,
      wallet_address: wallet_address,
      nonce: nonce
    }
    
    return this.postRequest(`/sdk/game/campaigns/reward/claim`,params);
  }

  rewards(
    project_url: string,
    campaign_url: string,
    wallet_address: string,
    page_size?: string, //min 5, default 10
    page?: string //min 1, default 1
  ): Promise<any[]> {

    var params:{
      project_url: string,
      campaign_url: string,
      wallet_address: string,
      page_size?: string,
      page?: string
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      wallet_address: wallet_address
    }
    if (page_size) params.page_size = page_size;
    if (page) params.page = page;
    
    return this.getRequest(`/sdk/game/campaign/rewards`,params);
  }

  rewardConditions(
    project_url: string,
    campaign_url: string,
    page_size?: string, //min 5, default 10
    page?: string //min 1, default 1
  ): Promise<any[]> {

    var params:{
      project_url: string,
      campaign_url: string,
      page_size?: string,
      page?: string
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
    }
    if (page_size) params.page_size = page_size;
    if (page) params.page = page;
    
    return this.getRequest(`/sdk/game/campaign/rewards/conditions`,params);
  }

  userRewards(
    project_url: string,
    campaign_url: string,
    wallet_address: string,
  ): Promise<any[]> {

    var params:{
      project_url: string,
      campaign_url: string,
      wallet_address: string,
    } = { 
      project_url: project_url,
      campaign_url: campaign_url,
      wallet_address: wallet_address,
    }
    
    return this.getRequest(`/sdk/game/campaign/reward/claimable`,params);
  }

  addTagToUser(
    project_id: string,
    wallet_address: string,
    tag: string,
  ): Promise<void> {

    var params:{
      project_id: string,
      wallet_address: string,
      tag: string,
    } = { 
      project_id: project_id,
      wallet_address: wallet_address,
      tag: tag,
    }
    
    return this.postRequest(`/sdk/game/game_projects/tag/add`,params);
  }

  removeTagFromUser(
    project_id: string,
    wallet_address: string,
    tag: string,
  ): Promise<void> {

    var params:{
      project_id: string,
      wallet_address: string,
      tag: string,
    } = { 
      project_id: project_id,
      wallet_address: wallet_address,
      tag: tag,
    }
    
    return this.postRequest(`/sdk/game/game_projects/tag/remove`,params);
  }

  getWalletsFromTags(
    project_id: string,
    tags: string[],
  ): Promise<any[]> {

    var params:{
      project_id: string,
      tags: string[],
    } = { 
      project_id: project_id,
      tags: tags
    }
    
    return this.getRequest(`/sdk/game/game_projects/tag`,params);
  }
}