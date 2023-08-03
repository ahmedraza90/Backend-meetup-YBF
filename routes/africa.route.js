const { router } = require("../app")
const controller = require("../controllers/africa.controller")

router.post('/africa',controller.save)
router.get('/africa-get-all-users',controller.get_all_users)
router.get('/africa-get-user-by',controller.get_user_by)


module.exports = router