import React,{Component} from 'react';

class Bookname extends Component{
    constructor(props){
        super(props);
        this.props = props;
    }
    render(){
        return (
            <div>
                <h4 >This is {this.props.name}</h4>
                
            </div>
        );
    }
}
export default Bookname;