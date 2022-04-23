var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/get/demo',function(req, res){
  res.status(200).json({
    "message" : "call get api demo"
  });
});
//post
router.post('/api/post/demo',function(req, res){
  res.status(200).json({
    "message2" : "call get api demo"
  });
});
module.exports = router;
