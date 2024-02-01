import React, { Component } from "react";

class ControlledComponent extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            mobile_number: 1234567890,
        }
        // this.submitFormHandler = this.submitFormHandler.bind(this);
        // this.changeNumberHandler = this.changeNumberHandler.bind(this);
    }

    // submitFormHandler(){
    submitFormHandler = (event) => {
        event.preventDefault();
        let mobile = event.target.mobile_number.value;
        let state_name = event.target.state_name.value;

        this.setState({ mobile }, function () {
            console.log(this.state);
        })
    }

    // }

    // changeNumberHandler(event){
    changeNumberHandler = (event) => {
        console.log("old value ", this.state);
        let mobileNum = event.target.value;
        this.setState({ mobileNum }, () => {
            console.log("new mobile number ", this.state);
        });
    }

    render() {
        return (
            <div>
                <h4>Controller Component Example </h4>
                <form >
                    <div>
                        <label htmlFor="">Mobile Number</label>
                        <input type="text" name="mobile_number" value={this.state.mobile_number} onChange={this.changeNumberHandler} />
                    </div>

                    {/* <div>
                        <label htmlFor="">State</label>
                        <input type="text" name="stateName" value={this.state.state_name} />
                    </div> */}

                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default ControlledComponent;