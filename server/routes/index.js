var express =require("express"),
    router  =express.router(),
    User    =require("../models/user.js");
    
router.get("/",function(req,res){
    res.send("Hello World!")
});

module.exports =router;