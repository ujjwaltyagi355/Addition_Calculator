//jshint esversion:6

const express=require("express");
const bosyParser=require("body-parser");

 const app= express();

app.use(bosyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.HTML");
});

app.post("/", function(req, res){

  var num1= Number(req.body.num1);
  var num2= Number(req.body.num2);
  var result= num1 + num2;

  res.send("The result of the calculation is: "+result);
})

app.listen("3000", function(){
  console.log("server running on port 3000");
})
