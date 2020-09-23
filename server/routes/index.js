var express =require("express"),
    router  =express.Router(),
    User    =require("../models/user.js");
    
//Landing Page
router.get("/",function(req,res){
    res.send("Hello World!")
});

//No User routes
module.exports =router;