const { router } = require("../app")
const controller = require("../controllers/qr.controller")

router.post('/send-watsApp',controller.send_watsApp)
router.post('/generate-qrCode',controller.generate_qr_code)
router.get('/qr-get-all-users',controller.get_all_users)
router.get('/qr-get-user-by-phone/:id',controller.get_user_by_phone)


module.exports = router