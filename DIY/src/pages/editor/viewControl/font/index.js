import React from 'react';
import {connect} from 'react-redux';
import { Input } from 'antd';
import Utils from '../../tools/utils';
const Font =(props)=>{
    const {data,selectedComponent} = props;
    return (
        <div  
        data-type= {data.type}
        className='item'
        data-id={data.id} 
        z-index={data.zIndex}
        onMouseDown = {()=>{selectedComponent(data)}}
        style={{width:data.width+'px',height:data.height+'px',top:data.top+'px',left:data.left+'px',zIndex:data.zIndex}}
    >{data.title}</div>
    )
};
const mapStateToProps = (state) =>{
    return {}
}
const mapDispathToProps = (dispath)=>{
    //const {data} = this.props;
    //const ndata = Object.assign({});
    return {
      hanldchangeClick(e){
          let compontObj = Utils.getUpdateComponentAction({title:e.target.value});
          dispath(compontObj);
      }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Font);


