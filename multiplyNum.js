const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/multiplyNum.html");
});

// app.post("/", function(req,res){

//     var weight = Number(req.body.Weight);
//     var height = Number(req.body.Height);

//     var result = weight + height;

//     res.send("Result is " + result);
// });

app.listen(3000, function(){
    console.log("Server started");
});
