import React, { Component, Fragment } from "react";

import { Input } from 'antd';


class FontConfig extends React.Component{
    state = {
        title:"DIY专题题工具",
        val:"DIY专题题工具"
    }
    constructor(props:any = {}){
       super(props); 
    };
    componentDidMount = () =>{
       console.log(this.props);
    }
    render() {
	    return (
         <div>
            <Input placeholder="Basic usage" />
         </div>
	    );
  }
}
export {
   FontConfig
};