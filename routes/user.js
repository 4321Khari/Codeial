const express = require("express");
const router = express.Router();

const userController = require("../controller/user_Controller");

router.get("/profile", userController.profile);

router.get("/profile_photos", userController.photos);

module.exports = router;
