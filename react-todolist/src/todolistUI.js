import React from 'react';
import { Input ,Button,List} from 'antd';

const TodolistUI = (props)=>{
  return (
    <div style={{margin:'10px'}}>
      <div >
         <Input placeholder="todo info" 
           style={{width:"300px",marginRight:'10px'}}
           value = {props.inputValue}
           onChange = {props.hanldChange}
         />
         <Button type="primary" onClick={props.hanldSubmit}>提交</Button>
      </div>
      <List
         style={{width:"300px",marginTop:'10px'}}
         bordered
         dataSource={props.list}
         renderItem={(item,index) => (
           <List.Item 
           onClick = {(index)=>{props.deleItem(index)}}
           >
                {item}
           </List.Item>
         )}
       />
    </div>
  );
}
/* class TodolistUI extends  React.Component{
    render(){
        return (
             <div style={{margin:'10px'}}>
               <div >
                  <Input placeholder="todo info" 
                    style={{width:"300px",marginRight:'10px'}}
                    value = {this.props.inputValue}
                    onChange = {this.props.hanldChange}
                  />
                  <Button type="primary" onClick={this.props.hanldSubmit}>提交</Button>
               </div>
               <List
                  style={{width:"300px",marginTop:'10px'}}
                  bordered
                  dataSource={this.props.list}
                  renderItem={(item,index) => (
                    <List.Item 
                    onClick = {(index)=>{this.props.deleItem(index)}}
                    >
                         {item}
                    </List.Item>
                  )}
                />
             </div>
        );
      }
} */
export default TodolistUI;