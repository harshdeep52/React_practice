import React,{Component} from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            country : null
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    nameChangeHandler(event){
        console.log(" textbox value ",event.target.value);
    }

    countryChangeHandler = (event) =>{
        console.log("  country value  ",event.target.value);
    }

    submitHandler(event){
        event.preventDefault();
        let name = event.target.name.value;
        let country = event.target.country.value;

       this.setState({name,country},()=>{
        console.log(this.state);
       })
     
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <h4>Form Data Example</h4>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onKeyUp={this.nameChangeHandler} />
                    </div>

                    <div>
                        <label htmlFor="">Country</label>
                        <select name="country" onChange={this.countryChangeHandler}>
                            <option>Select Country</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Japan</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">Send Data</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Form;