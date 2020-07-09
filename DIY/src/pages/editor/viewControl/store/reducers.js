import {HEAD_SEARCH_BLURED,HEAD_SEARCH_FOCUSED} from './actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
});

export default (state = defaultState,action) =>{
    if(action.type === HEAD_SEARCH_FOCUSED){
        return state.set('focused',true);
    }
    if(action.type === HEAD_SEARCH_BLURED){
        return state.set('focused',false);
    }
    return state;
}