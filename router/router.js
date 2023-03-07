const express = require("express");
const router = express.Router();

const {homePageShow, showBlogPage,showaboutPage,showregisterPage,showloginPage, showProfilePage} = require("../controler/all.router.control")

router.get("/", homePageShow)
router.get("/blog", showBlogPage)
router.get("/register", showregisterPage)
router.get("/login", showloginPage)
router.get("/profile", showProfilePage)



module.exports = router;