
import {common,dataMap} from '../common/commonData';
/* 
const DEFAULTS:any = {
  cache: {},
  box: '[data-query="canvasBox"]',
  configBox: '[data-query="configBox"]',
  selected: '[data-query="multiSelect"]',
  regExp: {
    whiteSpace: /[\r\n]{1,}/g,
    tab: /(?:[\n\r]+([\t\u0020]+))+\n?/g,
    isJsFile: /\.js(\?.+)?$/
  }

};
 */

interface option {
  type: string;
}
interface conversation{
  props:any;
  state:Object;
}
interface Utils{
  routerComponents():void;
  addConponent():void
}

export class UtilsService {
   // public options : any;   
   
    constructor(
      //private common:common
      private sup:conversation
    ){
      Object.assign(this, this.sup);
      console.log(this);
    };

    
    /**
     * [routerComponents description]
     * 渲染组件路由
     */
    routerComponents(opts:any){
     /*  common.list = [...common.list,{name:"ee3333eee",id:"3",a:6}];
      console.log(opts);
      opts.props.history.push({ 
         pathname: opts.compontStr+ opts.id,
      }); */
     
    };
    /**
     * 注册组件进入视图池
     */
    addConponent(opts:option){
        console.log(dataMap[opts.type]);
        
    };
  };