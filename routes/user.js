var express = require('express');
var router = express.Router();


const user_controller = require("../controllers/userController")

/* GET users listing. */
router.get('/', user_controller.index)

router.get("/sign-up", user_controller.sign_up_get)

router.post("/sign-up", user_controller.sign_up_post)

router.post("/log-in", user_controller.log_in_post)

router.get("/log-out", user_controller.log_out_get)

router.post("/join", user_controller.join_post)


module.exports = router;