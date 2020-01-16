import React from 'react';
import {BrowserRouter as Router,HashRouter,Redirect , Route, Switch} from 'react-router-dom';

import {FontConfig} from '../../components/right/font/font.component';


const BasicRouteRight = () => (
      <div>	   
	    <Route exact path="/config/font/:id" component={FontConfig}/>	
	    <Route exact path="/config/banner/:id" component={FontConfig}/>
      </div>
);


export default BasicRouteRight;