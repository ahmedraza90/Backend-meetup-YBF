const { router } = require("../app")
const controller = require("../controllers/KarakNightsxSwey.controller")

router.post('/KarakNightsxSwey',controller.add_KarakNightsxSwey)
router.get('/KarakNightsxSwey-get-all-users',controller.get_all_users)
router.get('/KarakNightsxSwey-get-user-by',controller.get_user_by)


module.exports = router