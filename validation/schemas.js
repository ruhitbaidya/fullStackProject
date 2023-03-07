const Joi = require("joi")
const registarionValid = Joi.object({
    Fname : Joi.string().required(),
    Lname : Joi.string().required(),
    email : Joi.string().email().required(),
    password : Joi.string().min(8).required(),
    date : Joi.string().required(),
})


module.exports = {
    registarionValid
}