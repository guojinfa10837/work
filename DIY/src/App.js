import React from 'react';
import {Provider} from 'react-redux';
import Router from './router'
import store from './store'
import 'antd/dist/antd.css';
function App() {
  return (
    <Provider store = {store}>
       <Router/>
    </Provider>
     
  );
}

export default App;
