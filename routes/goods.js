var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var connection = mysql.createConnection({
    host     : '182.92.81.47',
    user     : 'root',
    password : 'root',
    port: '3306',
    database : 'shop'
});
/* GET users listing. */
router.get('/list', function(req, res, next) {
    res.send('respond with a resource');
});

/* GET users listing. */
router.get('/goodslist', function(req, res, next) {

    connection.query('SELECT * FROM shop.p_goods ORDER BY goods_sn DESC LIMIT 9', function (error, list, fields) {
        if (error) throw error;
        // console.log('The solution is: ', list);
        res.send(list);
    })

});



// router.get('/test', function(req, res, next) {
//     var list=[
//         {goods_id:1234,goods_name:"IPHONE",goods_price:12255},
//         {goods_id:33,goods_name:"ping",goods_price:12552},
//         {goods_id:124434,goods_name:"axc",goods_price:6},
//         {goods_id:123334,goods_name:"mac",goods_price:7776},
//         {goods_id:123224,goods_name:"in",goods_price:77},
//     ];
//
//     res.send(list);
// });
module.exports = router;