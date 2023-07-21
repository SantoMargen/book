const router = require('express').Router();
const ControllerUser = require("../controllers/controllerUser.js")

router.post("/register", ControllerUser.registerUser)
router.post("/login", ControllerUser.userLogin)


module.exports = router