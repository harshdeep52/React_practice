import React,{Component} from "react";

class EventHandlerEx extends Component{

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : "eventHandler"
        }
    }
    
    buttonClickHandler = () =>{
        alert(this.state.name);
    }

    render(){
        return(
            <div>
                <h4>EventHandler Example </h4>
                <button onClick={this.buttonClickHandler}>EventHandler</button>
            </div>
        );
    }

}
export default EventHandlerEx;