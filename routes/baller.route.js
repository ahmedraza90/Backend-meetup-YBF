const { router } = require("../app")
const controller = require("../controllers/baller.controller")

router.post('/baller-save',controller.save)
router.post('/baller-update',controller.update)
router.get('/baller-get-user/:id',controller.get_users)
router.get('/baller-get-all-user',controller.get_all_users)


module.exports = router