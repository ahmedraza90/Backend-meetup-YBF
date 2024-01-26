const { router } = require("../app")
const controller = require("../controllers/fido.controller.js")

router.post('/merkleRoot',controller.merkle_root)
router.post('/check-wallet:wallet',controller.get_user_by)

module.exports = router