import 'dotenv/config';
// console.log(`the .env file`)
// console.log(process.env.REACT_APP_FBKEY);

export const Api = {
    Fb: {
        id: `1247945788697381`,
        key: process.env.REACT_APP_FBKEY,
        albumId: `1546629115495712`
    },
    Youtube: {
    	key: process.env.REACT_APP_YOUTUBEKEY,
    	playlist: {
    		adam: `PLjXcWJxdsigmcyQo1sqERqM6Sg_lXUtcz`,
    		improv: `PLjXcWJxdsigmryBdL-ENGEnLdq97TsWix`,
    		corporate: `PLjXcWJxdsigm6Lcn_RldRdivlUdXhlrZO`
    	}
    },
    Instagram: {
      access_token: process.env.REACT_APP_INSTAGRAMKEY,
      user_id: 17841405297495065,
      client_id:`652929335439642`,
      client_secret: `ffd90483d045918320aa766eb8fc4d2b`
    }
}
