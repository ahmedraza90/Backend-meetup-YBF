const { router } = require("../app")
const controller = require("../controllers/flappy.controller")

router.post('/flappy-save',controller.save)
router.post('/flappy-update',controller.update)
router.get('/flappy-get-user/:id',controller.get_users)
router.get('/flappy-get-all-user',controller.get_all_users)


module.exports = router