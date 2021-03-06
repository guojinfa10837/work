import React from 'react';
import Header from './common/header';
import Edtor from './pages/editor';
import {Provider} from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store = {store}>
       <Header/>
       <Edtor/>
    </Provider>
     
  );
}

export default App;
