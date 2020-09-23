var Tree   =require("../models/tree.js"),
    express=require("express"),
    router =express.Router();


//Index Route
router.get("/",async function(req,res){
    try{ 
        Tree.find({},function(err,allTrees){
        if(err)
            console.log(err);
        else{
            res.send(allTrees);
        }
        });
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
});

// //Show Route
// router.get();


// //Edit Route
// router.get();

// //Update Route

// //New Route
// router.get();

//Create Route
router.post("/",async function(req,res){
    var tree = new Tree({
        genus:req.body.genus,
        image:req.body.image,
        weight:req.body.weight,
        height:req.body.height,
        longitude:req.body.longitude,
        latitude:req.body.latitude
    });
    try{
        var newTree = await tree.save();
        res.status(201).json(newTree);
    }catch(err){
        res.status(400).json({ message: err.message});
    }
});

//Delete Route

module.exports = router;