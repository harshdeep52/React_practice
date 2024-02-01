import React,{Component} from 'react';

class StateExClass2 extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            course : "reactjs",
            duration : "45 Days",
            fees     : 1200,
        };       
    }
    courseChangeHandler(){
        this.setState({
            course : "Python",
            duration : "25 Days",
            fees : 12000,
        })
    }
    render(){
        return(
            <div>
                <h4 >Course Name {this.state.course} , and duration is {this.state.duration} , and fee {this.state.fees} only</h4>
                <button onClick={() => this.courseChangeHandler()}>Check New Course</button>
            </div>
        );
    }
}
export default StateExClass2;