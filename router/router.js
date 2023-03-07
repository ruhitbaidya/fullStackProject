const express = require("express");
const router = express.Router();

const {homePageShow, showBlogPage,showregisterPage,showloginPage, showProfilePage,postregisterPage,postloginPage} = require("../controler/all.router.control")

router.get("/", homePageShow)
router.get("/blog", showBlogPage)
router.get("/register", showregisterPage)
router.get("/login", showloginPage)
router.get("/profile", showProfilePage)
router.post("/register", postregisterPage)
router.post("/login", postloginPage)


module.exports = router;