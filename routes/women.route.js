const { router } = require("../app")
const controller = require("../controllers/women.controller")

router.post('/women-on-mars',controller.save_women)
router.get('/women-get-all-users',controller.get_all_users)
router.get('/women-get-user-by',controller.get_user_by)


module.exports = router