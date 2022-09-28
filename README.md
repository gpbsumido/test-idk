# refmint-sdk

SDK for use with https://app.refmint.xyz or https://test.refmint.xyz

## Usage	

###Log Referral Example:

Arguments:<br />
&emsp;custom_url: string // Custom URL of your project<br />
&emsp;wallet_adress: string // wallet_adress of the new user being referred<br />
&emsp;link_id: string // affiliate referral_id of the referrer<br />
&emsp;email_address (optional): string // email address of the referred new user<br />
&emsp;phone_number (optional): string // phone number of the referred new user<br />

Response:<br />
&emsp;{<br />
&emsp;&emsp;referral_link: string // ink to raffle refferal page,<br />
&emsp;&emsp;referral_id: string // affiliate referral_id of the referred user<br />
&emsp;}<br />

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

###Log View Example:

Arguments:<br />
&emsp;custom_url: string // Custom URL of your project<br />
&emsp;link_id: string // affiliate referral_id of the referrer<br />

Response:<br />
&emsp;{<br />
&emsp;&emsp;referral_link: string // link to raffle refferal page,<br />
&emsp;&emsp;referral_id: string // affiliate referral_id of the referred user<br />
&emsp;}<br />


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
