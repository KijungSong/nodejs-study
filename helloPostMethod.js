const serverinfo = require('./serverinfo');
var express = require('express');
var app = express();
// post 데이터는 'req.body.키값'' 으로 접근 할수 있는데,
// 바로 사용을 못한다. 접근시, undefinde로 나옴.
// body의 데이터를 사용하기위해서는 body pasing 미들웨어인 'body-parser'를 사용하여야하며
// 아래 두줄을 추가하면 된다.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded( {extended: false} ));

// Server Listen
app.listen(serverinfo.port, function(){
    console.log('Connected!!!');
})

// jade(템플릿 엔진) 설정(Post 데이터를 받기위한 html 페이지 생성하기 위한 용도로 사용.)
app.set('view engine', 'jade');
app.set('views', './views');

// '/'접속 라우터
// 접속시 서버에 데이터를 보낼수 있는 html 페이지를 클라이언트에게 넘김.
app.get('/', function(req, res){
    res.render('helloPostMethod');
})

// '/form_receiver' 접속 라우터 helloPostMethod.jade에서 클라이언트가 submit 버튼 누를 때 호출.
// 클라이언트가 넘긴 id값을 출력.
app.post('/form_receiver', function(req, res){
    res.send('입력받은 id 값은:'+ req.body.id);
})
