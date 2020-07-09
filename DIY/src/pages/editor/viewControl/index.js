import React from 'react';
import {connect} from 'react-redux';

import {DragWidget} from 'drag-widget';
import styles from './style.module.css';
import {actionCreators} from '../store';
import Utils from '../tools/utils';
import Font from './font'
let dragCompontent = null;
const ComponentView = (props)=>{
    const {data,selectedComponent} = props;
    switch(data.type){
        case 'font':
          return <Font 
                  data={data} 
                  selectedComponent={selectedComponent}
                  />
        default:
          return <div></div>   
    }
}
class ViewControl extends React.Component{
    constructor(props){
      super(props);
      this.utils = Utils;
    }
    componentDidMount(){
        console.log('render');
        const {update} = this.props;
        dragCompontent =  new DragWidget({
            target:document.getElementById('Wrap'),
            editorWrap:document.getElementById('editorWrap'),
            componentsWrap:document.getElementById('componentsWrap'),
            eventItem:'.item',
            cavasEl:document.getElementById('canvas'),
            cavasWidth:1000,
            cavasHeigth:1000,
            spacing:20,//线间距
            adsorptionNum:10,//组件之间吸附的间距
            linecolor:'#0088ff',
            isAdsorption:true, //是否吸附
            isShowTips:true,// 是否展示坐标框
            ischangeZindex:true,//是否提高zindex
            resize:function(obj){
                update({
                    width:obj.width,
                    height:obj.height,
                    top:obj.top,
                    left:obj.left,
                    zIndex:obj.zIndex
                });
            },
            drag:function(obj){
                update({
                    width:obj.width,
                    height:obj.height,
                    top:obj.top,
                    left:obj.left,
                    zIndex:obj.zIndex
                });
            },
            calipers:{
                cavasEl:document.getElementById('calipers'),
            }
        })
    }
   
    componentDidUpdate(){
        dragCompontent.update({});
    }
    
    getComponents(){
        let {list,selectedComponent} = this.props;
        const nlist = list.toJS();
        return (
            nlist.map((item,index)=>{
                return (
                    <ComponentView key={item.id} data={item} selectedComponent={selectedComponent}/>
                )
            })
        );
        
    }
    render(){
        let {list} = this.props;
        const nlist = list.toJS();
        return(
            <div className={styles.viewControlWrap}  id="Wrap">
                <div className={styles.calipersWrap} >
                    <canvas id="calipers" className={styles.calipers} width="1500px" height="1000px"></canvas>
                </div>
                <div className={styles.editorWrap} id="editorWrap">
                    <div className={styles.cavasWrap}>
                        <canvas id="canvas" className={styles.cavas} width="1000px" height="1000px"></canvas>
                        <div className={styles.bgWrap}></div>
                    </div>
                    <div className={`componentsWrap`} id="componentsWrap">
                       {this.getComponents()}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    let list = state.getIn(['editor','list']);
    let bglist = state.getIn(['editor','bglist']);
    return {
        bglist,
        list
    }
}
const mapDispathToProps = (dispath) => {
    return {
        selectedComponent(obj){
            const {id} = obj;
              //填充相应的配置
            Utils.setComponent(id);
            //打开配置框
            dispath(actionCreators.openConfigWrap());
        },
        update(opts){
            let action = Utils.getUpdateComponentAction(opts);
            console.log(action);
            dispath(action);
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ViewControl);

