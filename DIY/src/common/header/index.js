
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {HeaderWrap,Log,Nav,NavItem,NavSearch,Addition,Button,SearchWrap} from './style';
import {actionCreators} from './store';
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
        focused:state.getIn(['header','focused']) || false
    }
};
const mapDisPathToProps = (dispatch )=>{
    return {
        handleInputFocus(){
           dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default  connect(mapSateToProps,mapDisPathToProps)(Header);