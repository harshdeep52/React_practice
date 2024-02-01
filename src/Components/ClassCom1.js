import React,{Component} from "react";

class ClassCom1 extends Component{

    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return(
            <h4>This is {this.props.name} Component 1111</h4>
        );
    }
}

export default ClassCom1;