const express = require("express");
const app = express();
const routers = require("./router/router")
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/", routers)

module.exports = app;
