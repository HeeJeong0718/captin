var express = require('express');
const cors = require('cors')
const app = express()
const session = require('express-session');
const FileStore = require('session-file-store')(session);
var router = express.Router();
app.use(cors()); //보통은 app을 사용한다
router.use(cors()); //router사용하니까 router써줘야함...
router.use(
  session({
    key :"rest",
    genid: function() {
      console.log('session id created');
  },
    secret : "test",
    resave : false,
    saveUninitialized : false, 
    store : new FileStore(),
    cookie : {
      expires : 60 * 60 *24,
    }
  })
)
router.get('/api/get/demo',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  res.status(200).json({
    "message" : "call get api demo"
  });
});
//post -회원가입
router.get('/api/getsignup',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  console.log(req.session)
  const  {  username , password , nickname}    = req.body;
  res.session = req.body;
  console.log("username::" + JSON.stringify(req.body))
  console.log("username::" + JSON.stringify(res.session.username))
  res.status(200).json({
    "key" :res.session
  
  });
  //res.send({username , password , nickname });

});

//post -회원가입
router.post('/api/post/demosignup',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  console.log(req.session)
  const  {  username , password , nickname}    = req.body;
  res.session = req.body;
  console.log("username::" + JSON.stringify(req.body))
  console.log("username::" + JSON.stringify(res.session.username))
  res.send({username , password , nickname });

});
//로그인

router.post('/api/post/login',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  console.log(req.session);
  const { username  }  = req.body;
  res.session = req.body;
  console.log("usrname"  +  JSON.stringify(req.body))
  console.log("session"  + res.session.username);
  if(res.session.username === username){
    req.session.username = username
    console.log("req.session.username" + req.session.username);
    res.send(username); 
  }else{
    res.send(username); 
    console.log("username" + username);
  }
  // res.session = req.body;
  // res.send({
   // username 
  //});    
 /* const loggedUser = {
    username : res.session.username,
    password : res.session.password,
    nickname : res.session.nickname
  }*/
   
 

  
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

//post -회원가입
router.post('/api/post/demo',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  const { username , password, nickname} = req.body;
   //res.session(req.body);
   res.send({
    username , password, nickname
  });      
  
});

module.exports = router;
