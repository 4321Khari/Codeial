const express = require("express");
const router = express.Router();

const aboutController = require("../controller/about_us_controller");
router.get("/about_us", aboutController.about);
router.get("/about_new", aboutController.new);

module.exports = router;
