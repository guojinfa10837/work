/**
 * 随着js 的迭代 异步的几种跟进
 * 
*/
const fs = require('fs')
const util = require('util')
const co = require('co')
const filePath = './package.json'
/*
*1、使用callback
*/
/* function init(callback){
    fs.readFile(filePath,(err,data)=>{
         callback(JSON.parse(data));
    })
}
init((data)=>{
   console.log(data.name);
}) */

/**
 * 2、使用Promsie
*/
/* 
function readFileAsync(){
    return new Promise((resolve,reject)=>{
       fs.readFile(filePath,(err,data)=>{
           if(err) reject(err);
           resolve(data);
       })
    })
}

readFileAsync().then((data)=>{
    console.log(JSON.parse(data).name);
}).catch((err)=>{
    console.log(err);
}) */

/**
 * 三、使用co+promisify
 * co 是tj 开发的一个generatior 它实现了generatior 的自动执行
*/

/* co(function *(){
    let data = yield util.promisify(fs.readFile)(filePath)
    data = JSON.parse(data)
    console.log(data.name);
}) */

/**
 * 四、使用async 
*/

const readFile = util.promisify(fs.readFile)

async function init(){
    let data = await readFile(filePath);
    data = JSON.parse(data)
    console.log(data.name);
    return data;
}
init().then((data)=>{
    console.log(data);
})
