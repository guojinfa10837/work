import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
    bglist:[],
    list:[{
        type:'font',
        id:"2222",
        width:"300",
        height:'300',
        top:'20',
        left:'100',
        title:'1000',
        zIndex:1
    }],
    configObj:{
        isConfigShow:false,
        left:100,
        top:100,
    },
    title:'专题'
});
//组件更新
const updateCompont =(state,data)=>{
     return state.update('list',arr=>{
         let nArr = arr.toJS();
         for(let v of nArr){
            if(v.id === data.id){
                Object.assign(v,data)
            }
         }
         console.log("change before components list :",nArr);
         return fromJS(nArr)
     });
}
export default (state = defaultState,action) =>{
    switch(action.type){
        case actionTypes.APPEND_VIEW_COMPONENT: //添加组件
            return state.update('list',item=>item.concat(action.data));
        case actionTypes.UPDATA_VIEW_COMPONENT: //添加组件
            return updateCompont(state,action.data);

        case actionTypes.OPEN_CONFIGWRAP: //打卡配置框
            return state.merge({'configObj':{isConfigShow:true}})
        case actionTypes.CLOSE_CONFIGWRAP: //关闭配置框
            return state.merge({'configObj':{isConfigShow:false}})
        default:
            return state
    }
    
   
}