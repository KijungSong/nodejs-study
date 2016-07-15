const serverinfo = require('./serverinfo');
var express = require('express');
var app = express();

app.listen(serverinfo.port, function(){
    console.log('Connected!!!');
})

// '/'접속 라우터
// 첫번째 인자값 내에 query 변수가 있고 해당 변수를 통해 클라이언트가 보낸 쿼리스트링을 얻을수 있다.
// ex) http:localhost?id=1 => req.query.id 값은 1
// ex) http:localhost?id=2&name=hong => req.query.id 값은 1
//                                      req.query.name 값은 hong
app.get('/', function(req, res){
    var id = req.query.id;
    res.send("id 값은 :"+id);
})
