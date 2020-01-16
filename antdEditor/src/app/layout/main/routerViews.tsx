import React from 'react';
import {BrowserRouter as Router,HashRouter,Redirect , Route, Switch} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Views from './views';
import {FontConfig} from '../../components/right/font/font.component';
import Detail from '../right/rightSide'
const { Header, Sider, Content } = Layout;
const BasicRoute = () => (       
       <Switch>  
           <Route path="/views/zt"  render = {()=>              
               <Layout>
	                <Content  style={{background: '#ccc',minHeight: 580,}}>
	                     <Route exact path="/views/zt" component={Views}/>
	                </Content>	                
	                <Detail>
	                     <Route exact path="/views/zt/config/" component={FontConfig}/>
	                </Detail>            
               </Layout>  
		    }/>
		    <Route path="/views/font/:id"  render = {()=>              
               <Layout>
	                <Content  style={{background: '#ccc',minHeight: 580,}}>
	                     <Route path="/views/font/:id" component={Views}/>
	                </Content>	                
	                <Detail>
	                     <Route exact path="/views/font/:id/config/font/:id" component={FontConfig}/>
	                </Detail>            
               </Layout>  
		    }/>	
	       <Route exact path="/views/banner/:id" component={Views}/>
        </Switch>
      
);


export default BasicRoute;