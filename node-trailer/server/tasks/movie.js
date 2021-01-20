
/**
 * 怎加子进程执行爬虫脚本
*/
const  cp = require('child_process');
const {resolve} = require('path');

;(async ()=>{
    const script = resolve(__dirname,'../crawler/trailer-list')
    const child = cp.fork(script,[])  //子进程执行代码模块
    //const child = cp.spawn('node ',['sever','/crawler','trailer-list'])
    let invoked = false;

    child.on('error',err=>{
        if(invoked) return;
        invoked = true;
        console.log(err);
    })
    //子进程执行完退出后  执行回调
    child.on('exit',code =>{
        if(invoked) return;
        invoked = false;
        let err = code === 0 ?null : new Error('exit code'+code)
        console.log(err);

    })
   //接收子进程send 的回调参数
    child.on('message',data =>{
        let {result} = data;
        console.log(result)
    })
})()