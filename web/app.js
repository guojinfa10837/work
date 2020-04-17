var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//var demo = require('./routes/demo');
var upload = require('./website/upload/uploadServer');
var liuziUnmAndSimg = require('./website/liuziUnmAndSImg/liuziUnmAndSImg');
var getSiginList = require('./website/liuziUnmAndSImg/getSiginList');
var ApiWareList = require('./website/liuziUnmAndSImg/ApiWareList');

var save = require('./website/videoTree/save');

//var test = require('./webSite/test/test');
var app = express();
 //app.all('*', function(req, res, next) {  
  //res.header("Access-Control-Allow-Origin", "*");  
  //res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  //res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  //res.header("X-Powered-By",' 3.2.1')  
  //res.header("Content-Type", "application/json;charset=utf-8");  
  //next();  
//});
app.use((req,res,next)=>{
    res.header({
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':'x-requested-with'
       /* 'Content-Type': 'text/html; charset=UTF-8',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        'Connection': 'keep-alive',*/
    });
    next();
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/public",express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.use('/liuziNumAndSimg', liuziUnmAndSimg);
app.use('/getSiginList', getSiginList);
app.use('/ApiWareList', ApiWareList);

app.use('/save', save);

app.use('/uploads', upload);
//app.use('/test', test);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
