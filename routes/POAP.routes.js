const { router } = require("../app")
const controller = require("../controllers/POAP.controller")

router.post('/POAP',controller.add_POAP)
router.get('/POAP-get-all-users',controller.get_all_users)
router.get('/POAP-get-user-by',controller.get_user_by)


module.exports = router