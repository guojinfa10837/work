import {CHANGE_INPUT_VALUE,ADD_LIST_ITEM,DELE_LIST_ITEM} from './actionTypes'
const defaultState = {
    inputValue:'',
    list:[]
};
//reducer ,可以接受state，但是不可以修改state
export default (state = defaultState,action) =>{
    if(action.type == CHANGE_INPUT_VALUE){
      const newState = JSON.parse(JSON.stringify(state)) //js深拷贝
      newState.inputValue = action.inputValue;
      return newState;
    };
    if(action.type == ADD_LIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state)) //js深拷贝
        console.log(newState);
        newState.list = [...newState.list,newState.inputValue]
        newState.inputValue = '';
        console.log(newState);
        return newState;
    };
    if(action.type == DELE_LIST_ITEM){
        const newState = JSON.parse(JSON.stringify(state)) //js深拷贝
        newState.list.splice(action.index,1);
        return newState;
    }
    return state;
}