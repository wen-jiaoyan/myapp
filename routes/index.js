var express = require('express');
var router = express.Router();
const checkLogin = require('../middleware/checkLogin')     //验证登录中间件

router.use(checkLogin());
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API' });
});

router.get('/home/goods', function(req, res, next) {
  //res.render('index', { title: 'API' });
  res.send("111111")
});


module.exports = router;