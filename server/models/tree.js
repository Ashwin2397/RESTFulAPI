var mongoose=require("mongoose");

var treeSchema= new mongoose.Schema({
    genus:String,
    image:String,
    description:String,
    weight:Number,
    height:Number,
    longitude:String,
    latitude:String
});

module.exports=mongoose.model("Tree",treeSchema);