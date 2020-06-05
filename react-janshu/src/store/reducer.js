import {HEAD_SEARCH_BLURED,HEAD_SEARCH_FOCUSED} from './actionTypes';
const defaultState = {};

export default (state = defaultState,action) =>{
    if(action.type === HEAD_SEARCH_FOCUSED){
        const newstate = JSON.parse(JSON.stringify(state));
        newstate.focused = true;
        return newstate;
    }
    if(action.type === HEAD_SEARCH_BLURED){
        const newstate = JSON.parse(JSON.stringify(state));
        newstate.focused = false;
        return newstate;
    }
    return state;
}