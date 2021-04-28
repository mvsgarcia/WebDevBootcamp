const express = require('express');
const app = express();

app.get("/", function(req, res){
    //console.log(request);
    res.send("Hello");
})

app.get("/contact", function (req, res) {
  res.send("contact me at my-email@email.com");
});

app.get("/about", function (req, res) {
  res.send("I'm Miecaela");
});

app.get("/hobbies", function(req, res){
        res.send("<ul><li>coffee</li><li>games</li><li>code</li></ul>");
})

app.listen(3000, function() {
    console.log("Server added on port 3000");
});