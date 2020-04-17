var express = require('express');
var fs = request('fs');
var router = express.Router();

//引入request模块
var request = require("request");

/* GET home page. */
router.post('/', function(req, res, next) {

    console.log(req, res, next);
    res.status(200).json({
         status: 1,
         message: "成功", 
         msg: "成功", 
         data:{}
           
        })
//渲染主页
  //res.render('index', { title: 'Express'});
});

module.exports = router;