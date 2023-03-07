const homePageShow = (req, res)=>{
    res.render("home", {title : "Home"})
}
const showBlogPage = (req, res)=>{
    res.render("bloge", {title : "Blog"})
}

const showregisterPage = (req, res)=>{
    res.render("register", {title : "Register"})
    
}
const showloginPage = (req, res)=>{
    res.render("login", {title : "Login"})
}
const showProfilePage = (req, res)=>{
    res.render("profile", {title : "Profile"})
}
const postregisterPage = (req, res)=>{
    try{
        res.send(req.body)
        console.log(req.body)
    }catch(err){
        res.send(err)
    }
}

const postloginPage = (req, res)=>{

}


module.exports = {
    homePageShow,
    showBlogPage,
    showregisterPage,
    showloginPage,
    showProfilePage,
    postregisterPage,
    postloginPage
}