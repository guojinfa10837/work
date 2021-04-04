
const path = require("path");
const fs = require("fs");
const join = path.join;
const HtmlWebpackPlugin = require('html-webpack-plugin');

var files = [];
files = fs.readdirSync(path.join(__dirname, '../src/pages'));
//读取file 文件
function getJsonFiles(jsonPath){
    let jsonFiles = [];
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        console.log(files);
        files.forEach(function (item, index) {
            let fPath = join(path,item);

            let stat = fs.statSync(fPath);
            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) { 
              jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
}

const getentry = ()=>{
    const entryObj = {}
    files.forEach((item,index)=>{
        entryObj[item] = path.join(__dirname, `../src/pages/${item}/index.js`);
    })
    return entryObj;
}


const entry = ()=>{
    return {
        //path.join(__dirname, 'src/app.js')
        polyfills:path.join(__dirname, '../src/polyfills.js'),
        ...getentry()
    } 
}


const GetHtmlWebpackPlugin = ()=>{
    var htmlArr = []
    files.forEach((item,index)=>{
        htmlArr = [
            ...htmlArr,
            new HtmlWebpackPlugin({
                title:`${item}`,
                template:path.join(__dirname, `../src/pages/${item}/index.html`),
                chunks: [item,"common", "vendors", "manifest"],
                filename:`${item}.html`
             })
        ]
    })
    return htmlArr
}
module.exports = {
    entry:entry(),
    HtmlWebpackPluginQue:GetHtmlWebpackPlugin()
}