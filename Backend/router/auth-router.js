const express = require("express")
const router = express.Router()
const authcontrollers = require("../Controllers/auth-controller")
const signupSchema = require("../validators/auth-validator.js")
const validate = require("../middleware/validate-middleware.js")
const authMiddleware = require("../middleware/auth-middleware.js")

// api/auth routers
router.route("/").get(authcontrollers.home)
router
    .route("/registerAsTourist")
    .post(validate(signupSchema.Tourist), authcontrollers.registerTourist)
router
    .route("/registerAsLocal")
    .post(validate(signupSchema.Local), authcontrollers.registerLocal)
router.route("/login").post(authcontrollers.login)
router
    .route("/usersData")
    .get(authMiddleware ,authcontrollers.users)


module.exports = router;