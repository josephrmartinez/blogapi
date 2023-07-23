var express = require('express');
var router = express.Router();

// GET /posts
// GET /posts/:postid
// GET /posts/:postid/comments
// GET /posts/:postid/comments/:commentid
const user_controller = require("../controllers/userController")
const post_controller = require("../controllers/postController")


router.get('/', post_controller.index)

router.get("/sign-up", user_controller.sign_up_get)

router.post("/sign-up", user_controller.sign_up_post)

router.post("/log-in", user_controller.log_in_post)

router.get("/log-out", user_controller.log_out_get)




module.exports = router;