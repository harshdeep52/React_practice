import React, { Component } from "react";

class Person extends Component {
        constructor(props){
            super(props);
            this.props = props;
            this.state= {
                name : "Vijay",
                age :30
            }
        }
        render(){
            return(
                <div>
                    <div>
                        {/* <h3>Dear {this.props.name} , Welcome To React Js</h3> */}
                        <h3>Dear {this.state.name},{this.state.age} Welcome To React Js</h3>
                    </div>
                </div>
            );
        }
}

export default Person;