import React , {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props);
        this.deleItem = this.deleItem.bind(this)
    }
    deleItem(){
        const {index,delItem} = this.props;
        delItem(index);
    }
    render(){
        const {index,content} = this.props;
        return (
            <React.Fragment>
                <li key={index} onClick={this.deleItem}>{content}</li>
            </React.Fragment>
        )
    }
}
export default Item;