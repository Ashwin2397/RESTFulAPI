var Tree   =require("../models/tree.js"),
    express=require("express"),
    router =express.Router();


//Index Route
router.get("/",async function(req,res){
    try{ 
        Tree.find({},function(err,allTrees){
        if(err)
            res.status(500).json({ message: err.message });
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
router.get("/:id",async function(req,res){
    try{
        Tree.findById(req.params.id,function(err,foundTree){
            if(err)
                res.status(500).json({ message:err.message });
            else{
                res.send(foundTree);
            }
        });
    }
    catch(err){
        res.status(500).json({ message:err.message });
    }
});

// //Update Route
router.put("/:id",async function(req,res){
    try{
        Tree.findByIdAndUpdate(req.params.id,req.body,function(err,foundTree){
            if(err)
                res.status(500).json({ message:err.message });
        });
        res.status(204).json({ });
    }
    catch(err){
        res.status(500).json({ message:err.message });
    }
    
});

// //New Route
// router.get();

//Create Route
router.post("/",async function(req,res){
    var tree = new Tree({
        genus:req.body.genus,
        image:req.body.image,
        description:req.body.description,
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
router.delete("/:id",async function(req,res){
    try{
        Tree.findByIdAndRemove(req.params.id,function(err){
            if(err)
                res.status(500).json({ message:err.message });
           
        })
        res.status(204).json({ });
    }
    catch(err){
        res.status(500).json({ message:err.message });
    }
    
});


module.exports = router;