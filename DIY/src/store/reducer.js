import {combineReducers} from 'redux-immutable';
import {reducers as headerRedeucers} from '../common/header/store';
import {reducers as editorRedeucers} from '../pages/editor/store';
const reducers = combineReducers({
    header:headerRedeucers,
    editor:editorRedeucers
});

export default reducers;