var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 注册
router.post('/reg', function(req, res, next) {
  // TODO 注册逻辑
  console.log('1111');
});

// 登录
router.post('/login', function(req, res, next) {
  // TODO 登录逻辑
  console.log(req.body);
  res.send({errno:0,msg:"ok"});
});

module.exports = router;