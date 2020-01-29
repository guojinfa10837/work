import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';


class EditorView extends React.Component {
    constructor ( 
        props:any = {}
        
     ) {
       super(props); 
       console.log(this.props);
    };
    render() {
        
        
        console.log(this.props);
         return (<React.Fragment>
             <div>我今天很无聊啊  有意义 的事情在哪里</div>
             <div>5555</div>
         </React.Fragment>);
    }
}
const mapStateToProps = (state:any) =>{
    console.log(state);
    return {
        listQue:state.listQue
    }
}
export default connect(mapStateToProps)(EditorView);