import React from 'react';
import {common} from '../common/commonData';
import {Font} from '../../components/middle/font/font.component';
import {UtilsService} from '../util/utils.service'
interface state {
  [listQue: string]: object;
}
class Views extends React.Component{
    public utilTool:any =  UtilsService;
    public utils:any = new this.utilTool();
    state = {
        list:[],
        listQue:{}
    }
    constructor(props:any = {}){
       super(props);
    };
    
    componentDidMount = () =>{
       console.log("父亲");
        console.log(this.props);
        this.setState({
	       list:common.list,
	       listQue:common.listQue,
	    });
    }
    componentWillUnMount = () => {
        
    }
    configFn = (e:any) =>{
        console.log(this.props);
        (this.props as any).history.push({ 
         pathname: '/views/font/6/config/font/4',
        });
    }
    setListQue = (queue:any)=>{
        this.setState({	      
	       listQue:queue
	    });
    }
    render() {

	    return (
	          <div>
                  {Object.keys(this.state.listQue).map((key:string,index:number)=>{  
				      return ( 
				        <div key={index} id={key} onClick={this.configFn}>
				             <Font {...{listQue:this.state.listQue,inx:key,setListQue:(queue:any)=>this.setListQue(queue)}} ></Font>  
				        </div> 
				      )  
				    })}
	          </div>
	    );
  }
}

export default  (props:any)=><Views {...props} key={props.location.pathname} />