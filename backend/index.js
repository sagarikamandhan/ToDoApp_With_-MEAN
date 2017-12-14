var express = require('express');
var mongoose =  require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var route=require('./route');

const PORT = 3000;

//to use express functions call its constructor
var app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());

//connect to database
mongoose.connect("mongodb://localhost:27017/ToDoApp/backend");

//test database conection
mongoose.connection.on('connected',function(){
  console.log("connected to database");
});

mongoose.connection.on("error",function(err){
  console.log(err);
});

app.use('/',route);

//testing server
app.listen(PORT,function(){
  console.log("Server is running at port "+ PORT);
});
