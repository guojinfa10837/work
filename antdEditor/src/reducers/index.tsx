import { combineReducers } from 'redux';
import todos from './todo';
import listQue from './listQue';

export default combineReducers({
    todos,
    listQue
});