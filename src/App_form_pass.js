import React,{Component} from "react";

import Register3 from "./Components/Register3";
import Greek3  from "./Components/Greek3";


class App extends Component{

  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      name : null,
      email : null,
      password : null,
      isRegistered: false,
      isPasswordShow : false,
    }
    this.formHandler = this.formHandler.bind(this);
    this.passwordHandler = this.passwordHandler.bind(this);
  }

  formHandler(event){
    event.preventDefault();
      let name = event.target.name.value;
      let email = event.target.email.value;
      let password = event.target.password.value;

      this.setState({name,email,password,isRegistered:true});
  }

  passwordHandler(){
    this.setState({isPasswordShow : ! this.state.isPasswordShow});
  }

  render(){
    return(
      <div>
        {
          this.state.isRegistered === true ? <Greek3 name={this.state.name} email={this.state.email}></Greek3> : <Register3 submit={this.formHandler} isshowPass={this.state.isPasswordShow} checkPassword={this.passwordHandler}></Register3>
        }
      </div>
    )
  }

}
export default App;