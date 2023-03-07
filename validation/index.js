const validateData = (schemas)=>{
    return (req,res,next)=>{
        const {error} = schemas.validate(req.body, {abortEarly : false})
        if(error){
            const fierror = error.details.map((err)=>err.message)
            return res.send("server validation failed Please fill the right way this gap")
        }
        next()
    }
}

module.exports = validateData