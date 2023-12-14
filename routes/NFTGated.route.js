const { router } = require("../app")
const axios = require('axios');


router.get('/NFTgated', async (req, res) => {
    const {ownerId,contractAddress} = req.body
    const url = `https://staging-api-v3.oasisx.world/items?filter={"where":[{"ownerId":"${ownerId}", "contractAddress":"${contractAddress}"}]}`;

    try {
        const response = await axios.get(url);
        if (response.status >= 200 && response.status < 300) {
            console.log("ppppppppppppppppppp",response.data) 
            res.status(200).json(response.data);
        } else {
            console.log(response)
            res.status(400).json("Error submitting form data");
        }
    } catch (error) {
        res.status(400).json("Error fetching form data");
    }
})


module.exports = router