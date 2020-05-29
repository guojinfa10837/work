import React from 'react';
import { Input ,Button,List} from 'antd';
import store from './store';
import {gethanldChangeActionCreator,getdeleItemActionCreator,gethanldSubmitActionCreator} from './store/actionCreators'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = store.getState();
    this.hanldStoreChange = this.hanldStoreChange.bind(this);
    this.hanldChange = this.hanldChange.bind(this);
    this.hanldSubmit = this.hanldSubmit.bind(this)
    store.subscribe(this.hanldStoreChange);
  }
  hanldStoreChange(){
    this.setState(store.getState());
  }
  setDispatch(action){
    store.dispatch(action);
  }
  hanldSubmit(){
    const action = gethanldSubmitActionCreator(this.state.inputValue);
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
    return (
         <div style={{margin:'10px'}}>
           <div >
              <Input placeholder="todo info" 
                style={{width:"300px",marginRight:'10px'}}
                value = {this.state.inputValue}
                onChange = {this.hanldChange}
              />
              <Button type="primary" onClick={this.hanldSubmit}>提交</Button>
           </div>
           <List
              style={{width:"300px",marginTop:'10px'}}
              bordered
              dataSource={this.state.list}
              renderItem={(item,index) => (
                <List.Item 
                onClick = {this.deleItem.bind(this,index)}
                >
                     {item}
                </List.Item>
              )}
            />
         </div>
    );
  }
}

export default App;
