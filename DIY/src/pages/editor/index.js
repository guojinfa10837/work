import React from'react';
import { Layout } from 'antd';
import Config from './config';
import HeaderWrap  from './header';
import ViewControl from './viewControl';



import styles from './style.module.css';
//

const { Header, Sider, Content } = Layout;


class Editor extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <div className={styles.ztEditorWrap}>
                    <Config/>
                    <Layout style={{width:'100%',height:'100%'}}>
                        <Header>
                          <HeaderWrap/>
                        </Header>
                        <Layout>
                            <Sider width='120' theme='light'>Sider</Sider>
                            <Content>
                               <ViewControl/>
                            </Content>
                            <Sider theme='light'>Sider</Sider>
                        </Layout>
                    </Layout>
                </div>
            </React.Fragment>
        )
    }
   
}

export default Editor;