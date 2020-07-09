import React from'react';
import {DragWidget} from 'drag-widget'



class Editor extends React.Component{
    componentDidMount(){
        //拖拽功能
        new DragWidget({
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
            resize:function(obj){
                console.log("resize",obj);
            },
            drag:function(obj){
                console.log(obj);
            },
            calipers:{
                cavasEl:document.getElementById('calipers'),
            }

        })
    }
    render(){
        return (    
       <div className="Wrap"  id="Wrap">
            <div className="calipersWrap" >
                 <canvas id="calipers" className="calipers" width="2000px" height="2000px"></canvas>
            </div>
            <div className="editorWrap" id="editorWrap">
                <div className="cavasWrap">
                        <canvas id="canvas" className="cavas" width="1000px" height="1000px"></canvas>
                        <div className="bgWrap"></div>
                </div>
                <div className="componentsWrap" id="componentsWrap">
                    <div >
                        <div className="item" data-id="1" z-index='1' style={{'zIndex':'1'}}>
                            <span>1111</span>
                            <span>1111</span>
                           
                        </div>
                        <div className="item" data-id="2" z-index='2'  style={{top:'200px',left:'300px','zIndex':'2'}}></div>
                        <div className="item" data-id="3" z-index='3'  style={{top:'100px',left:'300px','zIndex':'3'}}></div>
                        <div className="item" data-id="4" z-index='4'  style={{top:'230px',left:'500px','zIndex':'4'}}></div>
                        <div className="item" data-id="5" z-index='5'  style={{top:'277px',left:'300px','zIndex':'5'}}></div>
                        <div className="item" data-id="6" z-index='6'  style={{top:'150px',left:'200px','zIndex':'6'}}></div>
                        <div className="item" data-id="7" z-index='7'  style={{top:'600px',left:'300px','zIndex':'7'}}></div>
                    </div>
                
                </div>
            </div>
        </div>
        )
    }
}

export default Editor;