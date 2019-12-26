
  var fs = require('fs');
  var express = require('express');
  var multer  = require('multer');
  let path = require('path');//test release
  var router = express.Router();

  let tempSrc=[],tempfileName = [];

  //文件存放的根路径

  /* 使用硬盘存储模式设置存放文件的路径已经文件名*/
  

var storage = multer.diskStorage({
      destination:function(req,file,cb){
         // 接收到文件后输出的保存路径（若不存在则需要创建）
          
         cb(null, path.resolve(__dirname,'../../public/uploads/'));  
      },
      filename:function(req,file,cb){
         // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        let temp = file.originalname.split('.');
        let fileName = file.fieldname + '-' + Date.now()+'.'+temp[temp.length-1];
        tempSrc.push('http://localhost:8080/public/uploads/'+fileName);
        tempfileName.push(fileName);
        cb(null,fileName); 
       
      }
});
  // 创建文件夹
var createFolder = function(folder){
    try{
        // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
        // 如果文件路径不存在将会抛出错误"no such file or directory"
        fs.accessSync(folder); 
    }catch(e){
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }  
};

var uploadFolder = path.resolve(__dirname,'../../public/uploads/');
createFolder(uploadFolder);



let uploader = {
    storage: storage,
    limits: {
        fileSize: 10*1024*1024,
        files: 3
    },
    fileFilter: function (req, file, cb) {
        // The function should call `cb` with a boolean                                                                                                                                                                   
        // to indicate if the file should be accepted

        // To reject this file pass `false`, like so:
        //cb(null, false);

        // To accept the file pass `true`, like so:
        cb(null, true);

        // You can always pass an error if something goes wrong:
        //cb(new Error('I don\'t have a clue!'))
    }
};


let uploads = multer(uploader).array('file', 100);

/* POST upload listing. */
router.post('/', function(req, res, next) {
    //var file = req.files;
    //console.log(req, res, next);
    uploads(req, res, function (err) {
        console.log("req.body",req.body);
        console.log(req.files);
        if (err) {
            // An error occurred when uploading
            if(err.code==='LIMIT_FILE_SIZE'){
                res.status(200).json({"status": "0", "msg": "文件大小超出"});
            }
            return
        }

        let tempArray=[];

        for(let v of req.files){
            tempArray.push({
                data:{"oldimgname":v.originalname},
                msg:`http://localhost:8080/public/uploads/${v.filename}`

            })
        }
        if(req.body.mode==='bg'){
            res.status(200).json({"status":"success","msg":"http:\/\/o7pp28l2f.bkt.clouddn.com\/topic_diy\/2019\/day_0308\/4c6f1d7a0e9c299abe6cb884c676ea4f.jpg","data":{"width":1920,"height":1280,"oldimgname":"001359d3e59cc49dae0d.jpg!1920.jpg","cutimgs":{"1":{"src":"http:\/\/o7pp28l2f.bkt.clouddn.com\/topic_diy\/2019\/day_0308\/523f95f81e0f73b5e84eb3ef92a5170b.jpg","width":1920,"height":256},"2":{"src":"http:\/\/o7pp28l2f.bkt.clouddn.com\/topic_diy\/2019\/day_0308\/757619c16b4f312550eaf4c822d6515e.jpg","width":1920,"height":256},"3":{"src":"http:\/\/o7pp28l2f.bkt.clouddn.com\/topic_diy\/2019\/day_0308\/31f86763cb8f45dbc0e83ea4f87f7cf9.jpg","width":1920,"height":256},"4":{"src":"http:\/\/o7pp28l2f.bkt.clouddn.com\/topic_diy\/2019\/day_0308\/fc64cea7825c25bc81df79b881b3de90.jpg","width":1920,"height":256},"5":{"src":"http:\/\/o7pp28l2f.bkt.clouddn.com\/topic_diy\/2019\/day_0308\/5f6e4e3847b4c239fe7ec3f0ac7290fb.jpg","width":1920,"height":256}}}});
            return;
        }
        if(req.body.mode == 'liuzi'){
            res.status(200).json({"status":"success","data":{"pro":{"A2":"\u5e7f\u4e1c\u7701","A7":"\u5317\u4eac\u5e02"},"ct":{"A2":{"C2":"\u5e7f\u5dde\u5e02"},"A7":{"C7":"\u5317\u4eac\u5e02"}},"jxs":{"C2":{"E2":"\u7ecf\u9500\u5546\u7b80\u79f05"},"C7":{"E7":"\u7ecf\u9500\u5546\u7b80\u79f06"}},"jxsid_xcarid":{"E2":["E2","E2","E2","E2","E2"],"E7":["E7"]},"jtoid":{"\u7ecf\u9500\u5546\u7b80\u79f01":"E2","\u7ecf\u9500\u5546\u7b80\u79f02":"E2","\u7ecf\u9500\u5546\u7b80\u79f03":"E2","\u7ecf\u9500\u5546\u7b80\u79f04":"E2","\u7ecf\u9500\u5546\u7b80\u79f05":"E2","\u7ecf\u9500\u5546\u7b80\u79f06":"E7"},"idtoj":{"E2":"\u7ecf\u9500\u5546\u7b80\u79f05","E7":"\u7ecf\u9500\u5546\u7b80\u79f06"},"obym":{"M2":"25\u4e07\u4ee5\u4e0b","M3":"25\u4e07-35\u4e07","M4":"35\u4e07-60\u4e07","M5":"60\u4e07-100\u4e07","M6":"100\u4e07\u4ee5\u4e0a"},"mtojxs":{"I2":["E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E2","E7","E7","E7","E7","E7"],"I7":["E2","E2","E2","E2","E7"]},"jxstom":{"E2":["I2","I2","I2","I2","I2","I7","I2","I2","I2","I2","I2","I2","I2","I2","I7","I2","I2","I2","I2","I2","I7","I2","I2","I2","I2","I2","I7"],"E7":["I2","I2","I2","I2","I2","I7"]},"m_id":{"I2":["\u8f66\u578b\u540d\u79f01","\u8f66\u578b\u540d\u79f02","\u8f66\u578b\u540d\u79f03","\u8f66\u578b\u540d\u79f04","\u8f66\u578b\u540d\u79f05","\u8f66\u578b\u540d\u79f01","\u8f66\u578b\u540d\u79f02","\u8f66\u578b\u540d\u79f03","\u8f66\u578b\u540d\u79f01","\u8f66\u578b\u540d\u79f02","\u8f66\u578b\u540d\u79f03","\u8f66\u578b\u540d\u79f04","\u8f66\u578b\u540d\u79f05","\u8f66\u578b\u540d\u79f01","\u8f66\u578b\u540d\u79f02","\u8f66\u578b\u540d\u79f03","\u8f66\u578b\u540d\u79f04","\u8f66\u578b\u540d\u79f05","\u8f66\u578b\u540d\u79f01","\u8f66\u578b\u540d\u79f02","\u8f66\u578b\u540d\u79f03","\u8f66\u578b\u540d\u79f04","\u8f66\u578b\u540d\u79f05","\u8f66\u578b\u540d\u79f01","\u8f66\u578b\u540d\u79f02","\u8f66\u578b\u540d\u79f03","\u8f66\u578b\u540d\u79f04","\u8f66\u578b\u540d\u79f05"],"I7":["\u8f66\u578b\u540d\u79f06","\u8f66\u578b\u540d\u79f06","\u8f66\u578b\u540d\u79f06","\u8f66\u578b\u540d\u79f06","\u8f66\u578b\u540d\u79f06"]},"id_m":{"\u8f66\u578b\u540d\u79f01":["I2","I2","I2","I2","I2","I2"],"\u8f66\u578b\u540d\u79f02":["I2","I2","I2","I2","I2","I2"],"\u8f66\u578b\u540d\u79f03":["I2","I2","I2","I2","I2","I2"],"\u8f66\u578b\u540d\u79f04":["I2","I2","I2","I2","I2"],"\u8f66\u578b\u540d\u79f05":["I2","I2","I2","I2","I2"],"\u8f66\u578b\u540d\u79f06":["I7","I7","I7","I7","I7"]},"id_otherid":{"I2":["I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2","I2"],"I7":["I7","I7","I7","I7","I7"]}}});
            return;
        }
      
        res.status(200).json({"status": "success","code":1,data:{ height:200,width:300,oldimgname:tempfileName}, "msg": tempSrc[0],"image_url":tempSrc.length<2?tempSrc[0]:tempSrc});
        tempSrc=[];
        tempfileName = [];
    });
  /*   console.log('444',file);
    console.log('文件类型：%s', file.mimetype);
    console.log('原始文件名：%s', file.originalname);
    console.log('文件大小：%s', file.size);
    console.log('文件保存路径：%s', file.path); */
    // 接收文件成功后返回数据给前端
    //res.json({res_code: '0'});
});

 
 module.exports = router;