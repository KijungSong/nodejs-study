const serverinfo = require('./serverinfo');
var express = require('express');
var app = express();

app.listen(serverinfo.port, function(){
    console.log('Connected!!!');
})

app.get('/', function(req, res){
  res.send("hello express!!");
})
