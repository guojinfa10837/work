import React, { Component, Fragment } from "react";



interface IState{
       [data:string]:any
    }
class Font extends React.Component{
   
    state = {
        title:"DIY专题题工具",
        data:{}
    }
    constructor(props:any = {}){
       super(props);

    };
     componentDidMount = () =>{
         let inx:string = (this.props as any).inx;
         let itemdata:object = (this.props as any).listQue[''+inx];
         this.setState({
             data:itemdata
         });
    }
    getItem(){
      
    };
    fn (){
	   
    };
    delefn =(e:any)=>{
      console.log(e);
      var inx = (this.state.data as any).id;
      var key = 'key'+inx;
     
      delete (this.props as any).listQue[key];
    
      (this.props as any).setListQue((this.props as any).listQue);

    };
    render() {
	    return (
          <div >{(this.state.data as any).type}<div onClick={this.delefn.bind(this)}>删除</div></div>
	    );
  }
}
export {
   Font
};