const { Signup ,Login} = require("../controller/AuthController");
const router = require("express").Router();
const {userVerification} = require("../middleware/AuthMiddleware")
router.post("/signup", Signup);
router.post('/login', Login)
router.post('/',userVerification)
module.exports = router;