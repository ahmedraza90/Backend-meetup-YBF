const { router } = require("../app")
const controller = require("../controllers/Samra.controller")

router.post('/Samra',controller.save)
router.get('/Samra-get-all-users',controller.get_all_users)
router.get('/Samra-get-user-by',controller.get_user_by)


module.exports = router