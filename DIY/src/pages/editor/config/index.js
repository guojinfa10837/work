import React from'react';
import styles from './style.module.css';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import Utils from '../tools/utils';
import {Drag} from 'drag-widget';

import Font from './font'
const getConfigComponent = (data) =>{
   switch(data.type){
     case 'font':
      return <Font data={data}/>
   }
}

class Config extends React.Component{
  componentDidMount(){
    const confgDrag = new Drag({
        target:document.body,
        componentsWrap:document.body,
        editorWrap:document.body,
        cavasEl:document.body,
        eventItem:'.configWrapDrag',
        cavasWidth:document.documentElement.clientWidth,
        cavasHeigth:document.documentElement.clientHeight,
        ischangeZindex:false,
        drag:function(obj){
            console.log(obj);
        }
    });
  }
  render(){
    const {hanldCloseClick,isConfigShow,data} = this.props;
    return (<div className={`configWrapDrag ${styles.configWrap} ${isConfigShow ? styles.show: styles.hide}`}>
              <div className={styles.header}>组件配置 <i className='iconfont' onClick={hanldCloseClick}>&#xe61d;</i></div>
              <div className="body">{getConfigComponent(data)}</div>
              <div className="foot"></div>
          </div>)
  }
}
const mapStateToProps = (state) =>{
    const list = state.getIn(['editor','list']);
    const nList  = list.toJS();
    const data = Utils.getComponentData(nList);
    return {
      isConfigShow:state.getIn(['editor','configObj','isConfigShow']),
      data
    }
}
const mapDispathToProps = (dispath)=>{
    return {
      hanldCloseClick(){
          dispath(actionCreators.closeConfigWrap()) //关闭配置框
      }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Config);