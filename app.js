var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static("Images"));

app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("landing");
});
app.get("/farmers", function(req,res){
    res.render("farmers");
});
app.get("/signup", function(req,res){
    res.render("signup");
});
app.get("/business", function(req,res){
    res.render("business");
});
app.listen(2006, function(){
   console.log("SERVER HAS STARTED BRO!!!!!");
});