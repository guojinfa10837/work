var express = require('express');
var router = express.Router();

//引入request模块
var request = require("request");

/* GET home page. */
router.post('/', function(req, res, next) {
    //console.log(req, res, next);
    res.status(200).json({
        status: 1, message: "成功",
        "data":{
            topic_id:"无聊的专题",
            relatiosn_topicid:"不想干活",
            foundation_number:6,
            f_lmt :2,
            describe:''
        }})
//渲染主页
  //res.render('index', { title: 'Express'});
});

module.exports = router;