import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Edtor from '../pages/editor';
import React from 'react';
const Router=()=>{
 return (
    <BrowserRouter >
    <Switch>
        <Route path='/home' exact render={()=><div>home</div>}></Route>
        <Route path='/' exact component={ Edtor}></Route>
    </Switch>
  </BrowserRouter>
 )
}

export default Router; 