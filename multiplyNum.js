const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/multiplyNum.html");
});

app.post("/", function(req,res){

    var number1 = Number(req.body.number1);
    var number2 = Number(req.body.number2);

    var result = number1 * number2;

    res.send("Result is " + result);
});

app.listen(3000, function(){
    console.log("Server started");
});
