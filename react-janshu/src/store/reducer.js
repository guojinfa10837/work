import {combineReducers} from 'redux-immutable';
import {reducers as headerRedeucers} from '../common/header/store' 

const reducers = combineReducers({
    header:headerRedeucers
});

export default reducers;