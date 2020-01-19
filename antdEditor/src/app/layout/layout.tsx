import React, { Component, Fragment } from "react";
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import BasicRoute from './main/routerViews';
import BasicRouteRight from './right/routerViews';
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

import {UtilsService} from './util/utils.service';
import {MainService} from './util/main.service';



import {common} from './common/commonData';
const { Header, Sider, Content } = Layout;


export interface dispatchStuff {
     dispatch: Dispatch
}
class LayoutDemo extends React.Component {
  public utilTool:any =  UtilsService;
  public utils:any = new this.utilTool(this);
  public mainTool:any =  MainService;
  public main:any = new this.mainTool();
  public routerId:number = 0;
  
  state = {
    collapsedLeft: false,
    collapsedRight: false,
  
  };
  constructor ( 
     props:any = {}
     
  ) {
    super(props); 
  
  }

  componentDidMount = () =>{
     console.log("页面初始化");  
     console.log(this.props);

    /*  this.main.init({
         props:(this.props as any)
     }); */
  }
  toggleLeft = () => {
    this.setState({
      collapsedLeft: !this.state.collapsedLeft,
    });
  };
  toggleRight = () => {
    this.setState({
      collapsedRight: !this.state.collapsedRight,
    });
  };
  addListQue(str:string){
      this.utils.addConponent({
          type:str
      });
      common.listQue['key'+this.routerId] = {
         type:str,
         id:this.routerId
      }
     console.log(common);
  };
  comfn = (e:any) =>{
     e.preventDefault();
     let viewState:string = e.target.id;
     this.addListQue(viewState);

   //  (this.props as any).dispatch({ type:'INCREMENT',data:{type:'foot'}})
   
    /*  this.utils.routerComponents({
          props:(this.props as any),
          viewState:viewState,
          compontStr:'/views/'+viewState+'/',
          id:this.routerId,
     }); */
     this.routerId++;
  };
  check (){
    console.log("changeck");
  }
  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible collapsed={this.state.collapsedLeft}>
          <div className="logo" />
            <button id={'font'} onClick={this.comfn}>font</button>
            <button id={'banner'} onClick={this.comfn}>banner</button>        
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
	            <Icon
	              className="trigger triggerLeft"
	              type={this.state.collapsedLeft ? 'menu-unfold' : 'menu-fold'}
	              onClick={this.toggleLeft}
	            />
          </Header>
          <Content >
            <Layout  style={{background: '#ccc',minHeight: 580,height:"100%"}}>
              <Content>Content</Content>
              <Sider  style={{background: '#fff'}}>Sider</Sider>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    );
  }
}




const mapStateToProps = (state:any) =>{
    console.log(state);
    return {
        data:state.data
    }
}
const mapDispatchToProps = ({dispatch}:{dispatch:Dispatch}):any=>{
   console.log(dispatch);
    return {
        add(){
            dispatch({ type:'INCREMENT',data:{type:'foot'}})
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(LayoutDemo);


