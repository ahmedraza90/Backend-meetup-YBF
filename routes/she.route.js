const { router } = require("../app")
const controller = require("../controllers/she.controller")

router.post('/she',controller.save)
router.get('/she-get-all-users',controller.get_all_users)
router.get('/she-get-user-by',controller.get_user_by)


module.exports = router