const express = require("express");

const router = express.Router();
const homeController = require("../controller/home_controller");

console.log("router loaded");

router.get("/", homeController.home);
router.use("/user", require("./user"));
router.use("/about", require("./about_us"));

//for any further rout access form here
//router.use('/about,require('./about))
module.exports = router;
