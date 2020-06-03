import {Get_LIST_ITEM} from './actionTypes';
import { takeLatest,put } from 'redux-saga/effects';
import axios from 'axios';
import {getinitActionCreator} from './actionCreators';
function* getListData(){
    const res = yield axios.get('http://localhost:8080/test');
    const action = getinitActionCreator(res.data.data);
    yield put(action);
}
function* mySage(){
    yield takeLatest(Get_LIST_ITEM, getListData);
}
export default mySage;