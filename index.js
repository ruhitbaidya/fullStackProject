const express = require("express");
const app = require("./app")
require("dotenv").config()
const port = process.env.PORT;

app.set("view engine", "ejs")
app.use(express.static('public'))

app.listen(port, ()=>{
    console.log("this is server is start")
})