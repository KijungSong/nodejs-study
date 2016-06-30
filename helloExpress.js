var express = require('express');
var app = express();
console.log('process.env.PORT', process.env.PORT);

app.listen(3000, function(){
    console.log('Connected!!!');
})

app.get('/', function(req, res){
  res.send("hello express!!");
})
