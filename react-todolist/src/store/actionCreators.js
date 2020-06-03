import {INIT_LIST_ITEM,Get_LIST_ITEM,CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELE_LIST_ITEM} from './actionTypes'
export const gethanldChangeActionCreator = (val)=>({
    type:CHANGE_INPUT_VALUE,
    inputValue:val
});
export const getdeleItemActionCreator = (index)=>({
    type:DELE_LIST_ITEM,
    index
})
export const gethanldSubmitActionCreator = ()=>({
    type:ADD_LIST_ITEM
})
export const getinitActionCreator = (data)=>({
    type:INIT_LIST_ITEM,
    data
})
export const getinitListActionCreator = (data)=>({
    type:Get_LIST_ITEM,
})