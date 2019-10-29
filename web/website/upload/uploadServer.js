var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({dest: 'upload_tmp/'});
let app = express();
router.post('/uploads', function (req, res, next) {
    res.json({
        "errcode": 200,
        "msg": "",
        "data": [
            {
                name:"法拉利",
                id:"22"
            },{
                name:"大众",
                id:"3"
            }
        ]})  
});

module.exports = router;