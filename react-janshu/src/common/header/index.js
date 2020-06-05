
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {HeaderWrap,Log,Nav,NavItem,NavSearch,Addition,Button,SearchWrap} from './style';
import {HEAD_SEARCH_BLURED,HEAD_SEARCH_FOCUSED} from '../../store/actionTypes';
const Header = (props)=>{
    const {focused,handleInputFocus,handleInputBlur} = props;
    return (
     <HeaderWrap>
        <Log/>
        <Nav>
           <NavItem className="left action">首页</NavItem>
           <NavItem className="left">下载App</NavItem>
           <SearchWrap>
               <CSSTransition
               in={focused}
               timeout={200}
               classNames='slide'
               >
                 <NavSearch
                 className={focused ? 'focused':''}
                 onFocus={handleInputFocus}
                 onBlur={handleInputBlur}
                 ></NavSearch>
              </CSSTransition>
             <i className={focused ? 'focused iconfont':'iconfont'} >&#xe61c;</i>
           </SearchWrap>
           <NavItem className="right">登陆</NavItem>
           <NavItem className="right">Aa</NavItem>
           <Addition>
               <Button className="writting"> <i className="iconfont">&#xe616;</i>写文章</Button>
               <Button className="reg">注册</Button>
           </Addition>
        </Nav>
     </HeaderWrap>
    );
}

const mapSateToProps  = (state)=>{
    return {
        focused:state.focused || false
    }
};
const mapDisPathToProps = (dispatch )=>{
    return {
        handleInputFocus(){
           
           const action ={
               type:HEAD_SEARCH_FOCUSED
           }
           dispatch(action);
           console.log(action);
        },
        handleInputBlur(){
            const action ={
                type:HEAD_SEARCH_BLURED
            }
            dispatch(action);
        }
    }
}
export default  connect(mapSateToProps,mapDisPathToProps)(Header);