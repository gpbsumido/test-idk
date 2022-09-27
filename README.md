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

const custom_url = 'custom-URL';
const wallet_adress = '0x123abc456def';
const link_id = '179Do0MI';
const email_address = '179Do0MI';
const phone_number = '1234567890'

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

const custom_url = 'custom-URL';
const link_id = '179Do0MI';

refmintClient.logView(custom_url,link_id).then((resp) => {
	//do something...
}).catch(e => {
  console.log(e)
});
```