const serverinfo = require('./serverinfo'); // 서버정보(ip,port)정보를 가진 .js파일
var express = require('express');           // express 라이브러리를 import한다.
var app = express();                        // express를 생성하여 app 변수에 저장.

// view engine으로 jade를 사용한다는것을 알림
app.set('view engine', 'jade');
// view의 위치(폴더)를 설정해준다. 디폴트 값이 ./views 이다.
app.set('views', './views');

// serverinfo.port에 설정한 포트값으로 listen 한다.
// listening이 성공하면  두번째 인자인 콜백 메서드를 호출한다.
app.listen(serverinfo.port, function(){
    console.log('Connected!!!');
})

// Hello Jade
app.get('/', function(req, res){
  // 'hello.jade' 파일을 웹페이지로 랜더링해서 클라이언트로 전송하는 메서드.
  // 이때 hello.jade 파일은 위에서 설정한 views에 위치하여야한다.
  res.render('hello');
})

// Jade에서 server-side에서 동적으로 생성한 값을 넘기는 방법
// res.render의 두번째 객체에 Key:Value 형태로 설정을하면,
// Jade에서 'tag= key' 형태로 사용 가능.
app.get('/curtime', function(req, res){
  // 'curtime.jade' 파일을 웹페이지로 랜더링해서 클라이언트로 전송하는 메서드.
  // 이때 curtime.jade 파일은 위에서 설정한 views에 위치하여야한다.
  res.render('curtime',{time:Date()});
})
