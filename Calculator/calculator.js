//Setup express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  //res.send("<h1>Hello World</h1>"); //Send the words Hello World from the root route as the response
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1 + n2;

    res.send("The result of the calculation is " + result);
});

//Spin up our server on port 3000 with app.listen
app.listen(3000, function(){
    console.log("Server added on port 3000");
});