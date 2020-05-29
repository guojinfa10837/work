import {CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELE_LIST_ITEM} from './actionTypes'
export const gethanldChangeActionCreator = (val)=>({
    type:CHANGE_INPUT_VALUE,
    inputValue:val
});
export const getdeleItemActionCreator = (index)=>({
    type:DELE_LIST_ITEM,
    index
})
export const gethanldSubmitActionCreator = (val)=>({
    type:ADD_LIST_ITEM,
    inputValue:val
})