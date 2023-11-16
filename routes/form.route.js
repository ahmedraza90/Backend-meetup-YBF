const { router } = require("../app")
const controller = require("../controllers/form.controller")

router.post('/form',controller.save)
router.get('/form-get-all-users',controller.get_all_users)
router.get('/form-get-user-by',controller.get_user_by)


module.exports = router