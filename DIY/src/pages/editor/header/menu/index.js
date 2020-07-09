import React from 'react';
import {connect} from 'react-redux'

import style from './style.module.css';
import  {actionCreators} from '../../store'

const Menu = (props)=>{
    const {addComponentHanldClick} = props;
    return (<div className={style.menu}>
                <div className={style.textBtn} onClick={()=>{
                    addComponentHanldClick('font')
                }}>
                    <i className='iconfont'>&#xe6bb;</i>
                    <span>文本</span>
                </div>
           </div>)
}

const mapStateToProps = (state) =>{
    return {

    }
}
const mapDispathTopProps = (dispath)=>{
    return {
        addComponentHanldClick(type){
            console.log(type);
            var obj = {
                type:'font',
                id: new Date().getTime(),
                width:"300",
                height:'300',
                top:'20',
                left:'100',
                title:'1000',
                zIndex:1
            }
            const action = actionCreators.addViewComponent(obj);
            console.log(action);
            dispath(action);
        }
    }
}
export default connect(mapStateToProps,mapDispathTopProps)(Menu);