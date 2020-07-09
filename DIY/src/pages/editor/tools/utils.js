import {actionCreators} from '../store';
let componentId = '';
const Utils = {
    setComponent(id){
        componentId = id;
    },
    /*
     * 此函数通过id去查找对应的组件对象 返回原生的 js对象
     */
    getComponentData(array){
       for(var v of array){
           if(v.id == componentId){
            return v
           }
       }
       return {};
    },
    getUpdateComponentAction(opts){
        let nObj = Object.assign({},{id:componentId},opts);
       return actionCreators.updateComponent(nObj);
    }
}
export default Utils;