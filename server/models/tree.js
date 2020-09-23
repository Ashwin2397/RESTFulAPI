var mongoose=require("mongoose");

var treeSchema= new mongoose.Schema({
    genus:String,
    image:String,
    weight:Number,
    height:Number,
    location:String
});

module.exports=mongoose.model("Tree",treeSchema);