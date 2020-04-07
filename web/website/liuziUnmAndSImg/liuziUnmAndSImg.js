var express = require('express');
var router = express.Router();

//引入request模块
var request = require("request");

/* GET home page. */
router.post('/', function(req, res, next) {
    //console.log(req, res, next);
    res.status(200).json({"data":{}})
//渲染主页
  //res.render('index', { title: 'Express'});
});

module.exports = router;