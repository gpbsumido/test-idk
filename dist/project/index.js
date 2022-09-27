import { Base } from "../base";
export class Project extends Base {
    logView(custom_url, link_id) {
        var params = {
            custom_url: custom_url,
        };
        if (link_id)
            params.link_id = link_id;
        return this.postRequest(`/api/external/view`, params);
    }
    logReferral(custom_url, wallet_address, link_id, email, phone, twitter, discord) {
        var params = {
            custom_url: custom_url,
            wallet_address: wallet_address
        };
        if (link_id)
            params.link_id = link_id;
        if (email)
            params.email = email;
        if (phone)
            params.phone = phone;
        if (twitter)
            params.twitter = twitter;
        if (discord)
            params.discord = discord;
        return this.postRequest(`/api/external/referral`, params);
    }
}
