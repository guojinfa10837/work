import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyled} from './style';
import './statics/styled/iconfont/iconfont.css'
ReactDOM.render(
    <React.Fragment>
     < GlobalStyled/>
     <App />
  </React.Fragment>,
  document.getElementById('root')
);



