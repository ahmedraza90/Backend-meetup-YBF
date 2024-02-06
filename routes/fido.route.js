const { router } = require("../app")
const controller = require("../controllers/fido.controller.js")

router.get('/merkleRoot',controller.merkle_root)
router.post('/contractDeploye/:walletAddress',controller.contract_deploy)
router.get('/contract',controller.contract_read)
router.get('/check-page/:walletAddress',controller.get_user_by)
router.get('/check-wallet/:walletAddress',controller.checker)

module.exports = router