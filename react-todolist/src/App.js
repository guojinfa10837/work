import React from 'react';


import store from './store';
import TodolistUI from './todolistUI'
import {gethanldChangeActionCreator,getInitSerivceDataActionCreator,getinitActionCreator,getdeleItemActionCreator,gethanldSubmitActionCreator} from './store/actionCreators'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.hanldStoreChange = this.hanldStoreChange.bind(this);
    this.hanldChange = this.hanldChange.bind(this);
    this.hanldSubmit = this.hanldSubmit.bind(this);
    this.deleItem = this.deleItem.bind(this);
    store.subscribe(this.hanldStoreChange);
  }
  componentDidMount(){
    //const data = {"data":["1","3"]};
    //const action = getinitActionCreator(data.data);
    //this.setDispatch(action);
    const action = getInitSerivceDataActionCreator();
    this.setDispatch(action);
  }
  hanldStoreChange(){
    this.setState(store.getState());
  }
  setDispatch(action){
    store.dispatch(action);
  }
  hanldSubmit=()=>{
    const action = gethanldSubmitActionCreator();
    this.setDispatch(action);
  };
  hanldChange(e){
    const action = gethanldChangeActionCreator(e.target.value);
    this.setDispatch(action);
  }
  deleItem(index){
    const action = getdeleItemActionCreator(index);
    this.setDispatch(action);
  }
  render(){
    return <TodolistUI
           inputValue ={this.state.inputValue}
           list ={this.state.list}
           hanldChange={this.hanldChange}
           hanldSubmit={this.hanldSubmit}
           deleItem={this.deleItem}
     />;
  }
}

export default App;
