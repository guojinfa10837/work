var express = require('express');
var router = express.Router();

//引入request模块
var request = require("request");

/* GET home page. */
router.post('/', function(req, res, next) {
    //console.log(req, res, next);
    res.status(200).json({
         status: 1,
         message: "成功", 
         msg: "成功", 
         data:{
            datalist:[
                {id: "50400", name: "齐*柏", mobile: "158****1111"},
                {id: "50399", name: "李*山", mobile: "158****3206"},
                {id: "50393", name: "李*", mobile: "158****3201"},
                {id: "50394", name: "李*山2", mobile: "158****3202"},
                {id: "50395", name: "g*山", mobile: "158****3206"},
                {id: "50396", name: "张*山", mobile: "158****3205"},
                {id: "503997", name: "王*山", mobile: "158****3555"},
                {id: "503996", name: "李*山", mobile: "158****6787"},
                {id: "503995", name: "李*山", mobile: "158****3906"},
                {id: "503994", name: "李*山", mobile: "158****3456"},
                {id: "503993", name: "李*山", mobile: "158****7776"},
                {id: "503992", name: "李*山", mobile: "158****3206"},
                {id: "503991", name: "李*山", mobile: "158****8886"},
                {id: "503993", name: "李*山", mobile: "158****3206"},
                {id: "503991", name: "郭锦发", mobile: "158****9999"}
            ],
            zcount: 8032
         }
        })
//渲染主页
  //res.render('index', { title: 'Express'});
});

module.exports = router;