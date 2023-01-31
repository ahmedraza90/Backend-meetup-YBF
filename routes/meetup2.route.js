const { router } = require("../app")
const controller = require("../controllers/meetup2.controller")

router.post('/meetup2-send-email',controller.send_email)
router.get('/meetup2-get-all-users',controller.get_all_users)
router.get('/meetup2-get-user-by',controller.get_user_by)


module.exports = router