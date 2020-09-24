var express =require("express"),
    router  =express.Router();
    
//Landing Page
router.get("/",function(req,res){
    res.send("Hello World!")
});

//No User routes
module.exports =router;