const { router } = require("../app")
const controller = require("../controllers/fido.controller.js")

router.get('/merkleRoot',controller.merkle_root)
router.get('/check-wallet/:walletAddress',controller.get_user_by)

module.exports = router