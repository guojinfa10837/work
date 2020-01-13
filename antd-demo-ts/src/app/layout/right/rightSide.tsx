
import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';

import {withRouter,Link} from 'react-router-dom';
const { Header, Sider, Content } = Layout;

class Detail  extends React.Component {
    render(){
        return (           
               <Sider 
	              style={{
	              background: '#fff',
	              minHeight: 580,
	              }}>
	                  <div>33333</div>
	                  <p> {this.props.children}</p>
	           </Sider>
	               
        )
    }
}
export default withRouter(Detail as any);
