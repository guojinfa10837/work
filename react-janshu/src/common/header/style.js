import styled from 'styled-components';
import log from '../../statics/styled/log.png';



export const HeaderWrap = styled.div`
    width:100%;
    height:58px;
    border-bottom:1px solid #ccc;
`;

export const Log = styled.a.attrs({href:'/'})`
   width:100px;
   height:56px;
   background:url(${log}) no-repeat;
   background-size:100%;
   margin-left:50px;
   border:0;
   float:left;
   display:block;
`;
export const Nav = styled.div`
   width:960px;
   height:100%;
   margin:0 auto;
   box-sizing: border-box;
   padding-right:20px;
`;
export const NavItem = styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.action{
    color:#ea6f5a;
  }
  &.left{
      float:left;
     
  }
  &.right{
      float:right;
      color:#969696;
  }
`;
export const SearchWrap = styled.div`
  float:left;
  overflow:hidden;
  position:relative;
  .iconfont{
      position:absolute;
      right:5px;
      bottom:5px;
      width:30px;
      height:30px;
      font-size:24px;
      line-height:30px;
      text-align:center;
      color:#999;
      border-radius: 19px;
      &.focused{
        background:#777;
    }
  }

`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 30px ;
    box-sizeing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:10px;
    font-size:14px;
    color:#666;
    &.slide-enter{
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
         width:160px;
    }
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float:right;
    margin-top:9px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    margin-right:15px;
    padding:0 20px;
    box-sizeing:border-box;
    box-sizing: border-box;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writting{
        background:#ec6149;
        color:#fff;
    }
`;