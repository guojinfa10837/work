import * as actionTypes from './actionTypes';


export const addViewComponent = (data)=>({
    type:actionTypes.APPEND_VIEW_COMPONENT,
    data
});
export const updateComponent = (data)=>({
    type:actionTypes.UPDATA_VIEW_COMPONENT,
    data
});

export const openConfigWrap = ()=>({  //打开配置框
    type:actionTypes.OPEN_CONFIGWRAP
})
export const closeConfigWrap = ()=>({
    type:actionTypes.CLOSE_CONFIGWRAP
})
