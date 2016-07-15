const serverinfo = require('./serverinfo'); // 서버정보(ip,port)정보를 가진 .js파일
var express = require('express');           // express 라이브러리를 import한다.
var app = express();                        // express를 생성하여 app 변수에 저장.

// serverinfo.port에 설정한 포트값으로 listen 한다.
// listening이 성공하면  두번째 인자인 콜백 메서드를 호출한다.
app.listen(serverinfo.port, function(){
    console.log('Connected!!!');
})

// get 라우팅을 설정하고 해당 1번째 인자로 전달한 path에 접속 시,
// 두번째 인자 콜백 메서드를 호출하여 결과값을 보내준다.
app.get('/', function(req, res){
  res.send("hello express!!");
})
