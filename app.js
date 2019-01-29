var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended : true}));

app.set('views', './views');
app.set('view engine', 'ejs');//ejs 템플릿 엔진  연동

// route setting - 라우팅(routing)
app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.render('index');//views디렉토리안에 있는 index.ejs 파일
});


var MyMailer = require('./middlewares/node_mailer');
app.post('/', function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var subject = req.body.subject;
    var phone = req.body.phone;
    var message = req.body.message;

    // 사용확인이 끝났으므로 일시주석처리
    // MyMailer.sendGoogle(
    //   firstName
    //   , lastName
    //   , subject
    //   , phone
    //   , message
    // );

    // MyMailer.test();
    res.render('index');
});

app.listen(3000, function(){
    console.log('App Listening on port 3000');
});
