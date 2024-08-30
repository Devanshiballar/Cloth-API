const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const upload = require("../util/fileupload");

router.post("/register",upload.single("profile"),adminController.register);
router.post("/login", adminController.login);



module.exports = router;