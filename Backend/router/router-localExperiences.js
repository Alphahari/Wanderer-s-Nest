const express = require("express");
const router = express.Router()
const experienceControllers = require("../Controllers/controller-localexperience");
const adminMiddleware = require("../middleware/admin-middleware");
const authMiddleware = require("../middleware/auth-middleware.js")
// const multer = require("multer");
// const upload = multer({ dest: 'uploads/' });


// api/ routers
router
    .route("/experiences")
    .post(experienceControllers.createExperince)
    
router.route("/fetch/experiences").get(experienceControllers.fetchExperince)

router.route("/admin/delete/experience").delete(authMiddleware,adminMiddleware,experienceControllers.deleteExperince)

module.exports = router;