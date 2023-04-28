const { router } = require("../app")
const controller = require("../controllers/ogNFT.controller")

router.post('/ogNFT',controller.save)
router.get('/ogNFT-get-all-users',controller.get_all_users)
router.get('/ogNFT-get-user-by',controller.get_user_by)


module.exports = router