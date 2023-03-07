const express = require("express");
const app = express();
const routers = require("./router/router")



app.use("/", routers)

module.exports = app;
