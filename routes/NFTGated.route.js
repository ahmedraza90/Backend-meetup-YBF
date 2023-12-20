const { router } = require("../app")
const axios = require('axios');


router.get('/NFTgated', async (req, res) => {
    const {walletAddress,contractAddress} = req.query
    try {
        const response = await axios.get(`https://api-new.oasisx.world/users?filter={"where":[{"walletAddress": "${walletAddress}"}]}`);
        if (response.status >= 200 && response.status < 300) {
            if((response.data).length == 0 ){
                return res.status(200).json({"status" : "User does not exist in OasisX"});
            } 
            const verify = await axios.get(`https://api-new.oasisx.world/items?filter={"where":[{"contractAddress": "${contractAddress}", "ownerId":"${response.data[0]["Id"]}"}]}`);
            if (verify.status >= 200 && response.status < 300) {
                if((verify.data).length == 0 ){
                    return res.status(200).json({"status" : "User do not have NFT"});
                }
                return res.status(200).json({"verify" : true});
            }
        } else {
            console.log(response)
            res.status(400).json("Error submitting form data");
        }
    } catch (error) {
        res.status(400).json("Error fetching form data");
    }
})


module.exports = router

//to get the userId from walletAddress:
//for staging
// https://staging-api-v3.oasisx.world/users?filter={"where":[{"walletAddress": "0x78823f91d85cb6cce64cc21141f7a0e1aca37f1e"}]}
//for production
// https://api-new.oasisx.world/users?filter={"where":[{"walletAddress": "0xccd4cdb106266845a737b8f5bed30652b738f9ba"}]}

//to check if the user owns nft in this smart contract
//for staging
// https://staging-api-v3.oasisx.world/items?filter={"where":[{"ownerId": "69ebd674-4a08-4872-af68-448d62539b3f", "contractAddress": "0xa6aa42d1bf24b49773c162a7dda9fa429ab1e509"}]}
//for production
// https://api-new.oasisx.world/items?filter={"where":[{"contractAddress": "0xacf1edff8f47c6d22d141ead76f0612bf7b74fde", "ownerId":"b25f4f98-9fe5-4d5f-a543-cefce4adb6ad"}]}


//to check owner of nft:
//for staging
// https://staging-api-v3.oasisx.world/collections/Page?filter={"where":[{"contractAddress": "0xa6aa42d1bf24b49773c162a7dda9fa429ab1e509"}],"relations":["owner"]}
//for production
// https://api-new.oasisx.world/collections/Page?filter={"where":[{"contractAddress": "0xacf1edff8f47c6d22d141ead76f0612bf7b74fde"}],"relations":["owner"]}

