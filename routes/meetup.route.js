const { router } = require("../app")
const controller = require("../controllers/meetup.controller")

router.post('/send-email',controller.send_email)
router.get('/meetup-get-all-users',controller.get_all_users)
router.get('/meetup-get-user-by',controller.get_user_by)


module.exports = router