/**
 * Created by guojinfa on 2019/8/22.
 * E-mail:36995800@163.com
 * 公共模块、公共对象
 */
let storage = new Map();
export default storage;

interface common {
    [propName: string]: any;
}

interface dataMapType {
    [type: string]: string
}

let common: common = {
    expando: 1,
    indexCount: 1,
    bgImg: null,
    title: "专题",
    mainWidth: 100,
    canvasHeight: 1000,
    cache: [],
    lzcache: {key: "lz", value: {}},
    list:[{name:"eeeee",id:"3",a:6},{name:"222",id:"3",a:6}],
    listQue:{},
    pcLink: null,//pc相关联专题
    
};
let destroyList:any = new Map();
var dataMap:dataMapType = {};
let ComponentMap:any =  new Map();
export {
    common,
    destroyList,
    storage,
    ComponentMap,
    dataMap,
}