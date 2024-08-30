const express=require("express")
const router=express.Router()
const clothController = require("../controllers/clothController");
const upload = require("../util/fileupload");
const {verifyUserToken, IsUser} = require("../config/auth")

router.post("/cloth_Add",verifyUserToken,IsUser, upload.single("image"), clothController.create);

module.exports = router;