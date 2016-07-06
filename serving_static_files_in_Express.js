const serverinfo = require('./serverinfo'); // 서버정보(ip,port)정보를 가진 .js파일
var express = require('express');           // express 라이브러리를 import한다.
var app = express();                        // express를 생성하여 app 변수에 저장.

//public 폴더를 정적 파일 경로로 설정.
app.use(express.static('public'));

// serverinfo.port에 설정한 포트값으로 listen 한다.
// listening이 성공하면  두번째 인자인 콜백 메서드를 호출한다.
app.listen(serverinfo.port, function(){ // serverinfo.port
    console.log('Connected!!!');
})

// 테스트 방법! 서버 실행 후.
// 'http://주소:포트/imj.jpeg' 접속.
// 'http://주소:포트/iu.jpeg' 접속.
