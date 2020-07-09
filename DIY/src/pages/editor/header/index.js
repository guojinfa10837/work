import React from 'react';

import Menu from './menu';
import style from './style.module.css'
const HeaderWrap = ()=>{
    return (<div className={style.header}>
        <div className={style.logoWrap}>
           <img src='https://lib.eqh5.com/eqx.layout/images/eqxlogo.svg'/>
        </div>
        <Menu/>
    </div>)
}

export default HeaderWrap;