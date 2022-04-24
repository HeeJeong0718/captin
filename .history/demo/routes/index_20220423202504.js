var express = require('express');
const cors = require('cors')
var cookieParser = require('cookie-parser');

router.use(cookieParser());
router.use(
  session({
    key : 'loginData',
    secret : "test",
    resave : false,
    saveUninitialized : false,
    cookie : {
      expires : 60 * 60* 24,
    }
  })
);


var router = express.Router();
const app = express()
app.use(cors()); //보통은 app을 사용한다
router.use(cors()); //router사용하니까 router써줘야함...


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/get/demo',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  res.status(200).json({
    "message" : "call get api demo"
  });
});
//post -회원가입
router.post('/api/post/demo',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  const { username , password, nickname} = req.body;
  
   res.send({
    username , password, nickname
  });      
  
});
//로그인
router.post('/api/post/login',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  const { username , password ,nickname} = req.body;
  const loggedUser = {
    username : req.body.username,
    password : req.body.password,
    nickname : req.body.nickname
  }
  if(username == ""){
    res.status(400).json("no user");
  }else{
    res.send({
      loggedUser,
      success : 'true'
    });
  }
  
});


/*app.post('/api/post/demo',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  const { username , password} = req.body;
  res.send({
    username, 
    password 
  });
});*/


module.exports = router;