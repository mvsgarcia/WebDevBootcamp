const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {

  var w = parseFloat(req.body.weight);
  var h = parseFloat(req.body.height);

  var result = Math.floor(w / Math.pow(h, 2));

  res.send("Your BMI is " + result);
});

app.listen(3000, function(){
    console.log("Server added on port 3000");
});