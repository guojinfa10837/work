var express = require('express');
var router = express.Router();

//引入request模块
var request = require("request");
var luncknum = 3;
var initlucknum =  1;
var isAnswer = 0;
/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    //提交
    if(req.body.type == 'submit'){
        luncknum = 3;
        isAnswer = 1;
        res.status(200).json({
            state:'200',
            'msg':'提交成功',
            isAnswer:isAnswer,
            luckDrawNum:luncknum
        })
    }
    //tiplist
    if(req.body.type == 'list'){
        res.status(200).json({
            list: [
                "恭喜曹**获得二等奖",
                "恭喜汪**获得三等奖",
                "恭喜范**获得二等奖",
            ]
        })
    }
    //抽奖
    if(req.body.type == 'luck'){
        if(req.body.state == 'init'){
            res.status(200).json({
                state:'200',
                id:"4",
                isAnswer:isAnswer, 
                luckDrawNum:initlucknum,
            });
            return;
        }else{
            luncknum --;
            res.status(200).json({
                state:'200',
                id:"4",
                isAnswer:isAnswer,
                luckDrawNum:luncknum,
            })
        }
       
    }

//渲染主页
  //res.render('index', { title: 'Express'});
});

module.exports = router;