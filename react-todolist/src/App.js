import React from 'react';
import Item from './item'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal:'',
      list:[]
    }
    this.hanldDel = this.hanldDel.bind(this);
  }
  hanldChangeVal(e){
    let inputVal = e.target.value;
    this.setState(()=>({
      inputVal
    }))
  }
  hanldSubmit(){
     
     this.setState((prevState)=>{
        return {
          inputVal:'',
          list: [...prevState.list,prevState.inputVal]
        }
     });
  }
  hanldDel(index){
     this.setState((prevState)=>{
      let list = [...prevState.list];
      list.splice(index,1);
      return {
         list
      }
     })
  }
  getItem(){
    return (
      this.state.list.map((item,index)=>{
        return(
          <React.Fragment key={index}>
            <Item
               content={item}
               index={index}
               delItem = {this.hanldDel}
            />
            {/* <li
            key={index}
            onClick={this.hanldDel.bind(this,index)}>{item}</li>*/}
          </React.Fragment>
       
        )
      })
    )
  }
  render(){
    const state = this.state;
    return (
        <React.Fragment>
          <div>
             <input type="text" value = {state.inputVal} onChange={this.hanldChangeVal.bind(this)} />
             <button onClick={this.hanldSubmit.bind(this)}>提交</button>
          </div>
          <ul>
            {this.getItem()}
          </ul>
        </React.Fragment>
    );
  }
}

export default App;
