//Dependencies
var mongoose=require("mongoose"),
    express = require("express"),
    User    =require("./models/user.js"),
    Tree    =require("./models/tree.js"),
    cors    =require("cors"),
    app     =express();

//Routes
var treeRoutes  =require("./routes/trees.js"),
    indexRoutes =require("./routes/index.js");

// Connect to mongodb server
var url="mongodb://127.0.0.1:27017/trees";
mongoose.connect(url,{useNewUrlParser: true});
mongoose.set('useUnifiedTopology', true);

//Check if connection to db is successfull
var db = mongoose.connection
db.once('open', _ => {
  console.log('Database connected:', url)
})
db.on('error', err => {
  console.error('connection error:', err)
})

//Setup CORS
app.use(express.json());
app.use(cors());


//Connect app to routes
app.use("/",indexRoutes);
app.use("/trees",treeRoutes);




app.listen(3000,function(){
    console.log("Server has started");
});