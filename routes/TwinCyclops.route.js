const { router } = require("../app")
const controller = require("../controllers/TwinCyclops.controller")

router.post('/TwinCyclops',controller.save)
router.get('/TwinCyclops-get-all-users',controller.get_all_users)
router.get('/TwinCyclops-get-user-by',controller.get_user_by)


module.exports = router