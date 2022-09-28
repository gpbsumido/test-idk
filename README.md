# refmint-sdk

SDK for use with https://app.refmint.xyz

## Usage	

Log Referral Example:

Arguments:
	custom_url: Custom URL of your project
	wallet_adress: wallet_adress of the new user being referred
	link_id: affiliate referral_id of the referrer
	email_address (optional): email address of the referred new user
	phone_number (optional): phone number of the referred new user

Response:
	{
		referral_link: link to raffle refferal page,
		referral_id: affiliate referral_id of the referred user
	}

```ts
import Refmint from "refmint-sdk"

const custom_url = 'refmintsdk'; //example project on testnet
const wallet_adress = '0x123abc456def'; //insert wallet of referree here
const link_id = 'fqOm45Jv'; //example link id for an affiliate on the example project
const email_address = ''; // (optional) insert referree email here
const phone_number = '1234567890' // (optional) insert referree phone number here
const api_key = 'reYam27iBtMqeGuEhR2ywSV6440wo3gx2CcIC5IK6RNHRCvBoKAHdsNx3FyLz2t1'; //demo api key for testnet

var refmintClient = new Refmint({
	apiKey: api_key,
	baseUrl: "https://test.refmint.xyz"
});

refmintClient.logReferral(custom_url,wallet_adress,link_id,email_address,phone_number).then((resp) => {
	//do something...
}).catch(e => {
	console.log(e);
});

```

Log View Example:

Arguments:
	custom_url: Custom URL of your project
	link_id: affiliate referral_id of the referrer

Response:
	{
		referral_link: link to raffle refferal page,
		referral_id: affiliate referral_id of the referred user
	}


```ts
import Refmint from "refmint-sdk"

//Log Referral Example:

const custom_url = 'refmintsdk'; //example project on testnet
const link_id = 'fqOm45Jv'; //example link id for an affiliate on the example project
const api_key = 'reYam27iBtMqeGuEhR2ywSV6440wo3gx2CcIC5IK6RNHRCvBoKAHdsNx3FyLz2t1'; //demo api key for testnet

var refmintClient = new Refmint({
	apiKey: api_key,
	baseUrl: "https://test.refmint.xyz"
});

refmintClient.logView(custom_url,link_id).then((resp) => {
	//do something...
}).catch(e => {
  console.log(e)
});
```
