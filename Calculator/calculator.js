//Setup express
const express = require("express");
const app = express();

//Send the words Hello World from the root route as the response 
app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
});

//Spin up our server on port 3000 with app.listen
app.listen(3000, function(){
    console.log("Server added on port 3000");
});