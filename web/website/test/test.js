var express = require('express');
var router = express.Router();

//引入request模块
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req, res, next);
    //向我们刚才创建的request.php文件发起请求
    request('http://localhost/application/php/requestJson.php', function (error, response, body) {
    
      if (!error && response.statusCode == 200) {
        console.log(body) // 打印获取到的数据，这里输出10
      }
    }) 

//渲染主页
  //res.render('index', { title: 'Express'});
});

module.exports = router;