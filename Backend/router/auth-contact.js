const express = require("express")
const router = express.Router()
const contact = require("../Controllers/contactForm-controller")

router.route("/contact").post(contact)

module.exports = router