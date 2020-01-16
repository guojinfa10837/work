import React from 'react';
import LayoutDemo from './app/layout/layout';

import { HashRouter, Route, Redirect} from "react-router-dom";
import "./assets/layout.css";

class App extends React.Component{
    state = {
        title:"DIY专题题工具"
    }
    constructor(props:any = {}){
       super(props); 
    };
    fn (){
	   
    };
    render() {
	    return (
            <HashRouter>
               <Route path='/' render={()=>(<Redirect to='/views' />)}></Route>
               <Route path='/views' component={LayoutDemo}></Route>
            </HashRouter>

	    );
  }
}
export default App;
