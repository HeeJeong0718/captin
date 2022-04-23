var express = require('express');
const cors = require('cors')
var router = express.Router();
const app = express()
app.use(cors());
router.use(cors());
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
//post
router.post('/api/post/demo',function(req, res){
  res.setHeader('Access-Control-Allow-origin', '*'); //직접헤더에명시
  res.setHeader('Access-Control-Allow-Credentials', 'true'); //쿠키 주고받기 허용
  const { username , password} = req.body;
  res.send({
    username, 
    password 
  });
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
