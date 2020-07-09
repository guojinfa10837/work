import React from 'react';
import {connect} from 'react-redux';
import { Input } from 'antd';
import Utils from '../../tools/utils';

const Font =(props)=>{
    const {data,hanldchangeClick} = props;
    return (
        <div>
           <Input placeholder="Basic usage" value={data.title} onChange={(e)=>{hanldchangeClick(e)}}/>
        </div>
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


