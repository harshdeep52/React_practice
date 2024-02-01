import React,{Component} from 'react';

class StateExClass extends Component{

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : "john",
            age  : 25
        };
    }
    nameChangeHandler(){
        this.setState({name:"sam",age:22});
    }
    render(){
        return (
            <diiv>
                <h5>Dear {this.state.name}, Your age is {this.state.age} </h5>
                <br/>
                <button onClick={() => this.nameChangeHandler()}>Click Me</button>
            </diiv>
        );
    }

}
export default StateExClass;