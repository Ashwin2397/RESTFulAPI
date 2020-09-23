var Tree =require("./models/tree.js"),
    data= [
    {
        genus: "Arbutus",
        image: "https://images.unsplash.com/photo-1576697293855-707ff489fc7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "A beautiful Arbutus tree",
        weight: 50,
        height: 30,
        longitude: "15^N",
        latitude: "30^W"
    },
    {
        genus: "Arbutus",
        image: "https://images.unsplash.com/photo-1563761739882-53d952647dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        description: "Another Arbutus Tree ...",
        weight: 50,
        height: 30,
        longitude: "15^N",
        latitude: "30^W"
    },
    {
        genus: "Pine",
        image: "https://images.unsplash.com/photo-1480442646297-37901d5ea815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        description: "Pine Tree in the middle of nowhere",
        weight: 50,
        height: 30,
        longitude: "0^N",
        latitude: "67^W"
    },
    {
        genus: "Fir",
        image: "https://images.unsplash.com/photo-1520828604796-f5109646cccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        description: "Fir tree of the edge of the North Pole",
        weight: 50,
        height: 30,
        longitude: "1^n",
        latitude: "10^w"
    }
];
function seedDB(){
    Tree.remove({},function(err){
        if(err)
            console.log(err);
        else{
            data.forEach(function(seed){
                Tree.create(seed,function(err,tree){
                    if(err)
                        console.log(err);
                });
            });
        }
    });
}

module.exports=seedDB;