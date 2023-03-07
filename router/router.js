const express = require("express");
const router = express.Router();
const {registarionValid} = require("../validation/schemas")
const {homePageShow, showBlogPage,showregisterPage,showloginPage, showProfilePage,postregisterPage,postloginPage} = require("../controler/all.router.control")
const validateData = require("../validation/index")
router.get("/", homePageShow)
router.get("/blog", showBlogPage)
router.get("/register", showregisterPage)
router.get("/login", showloginPage)
router.get("/profile", showProfilePage)
router.post("/register", validateData(registarionValid), postregisterPage)
router.post("/login", postloginPage)


module.exports = router;