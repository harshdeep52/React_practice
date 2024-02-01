import react,{Component} from 'react';

class Form2 extends Component{

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name: null,
            country : null
        }
        this.getNameHandler = this.getNameHandler.bind(this);
        this.getEmailHandler = this.getEmailHandler.bind(this);
        this.formHandler    = this.formHandler.bind(this);
    }
 
    getNameHandler(event){

    }
    getEmailHandler(event){

    }

    formHandler(event){
        event.preventDefault();
        let name = event.target.fname.value;
        let email = event.target.email.value;
    
        this.setState({name,email},()=>{
            console.log(this.state);
           })
    }

    render(){
        return(
            <div>
                <h4>This Is Form2 Example</h4>
                <form method="post" onSubmit={this.formHandler}>
                    <div>
                        <label>Name</label>
                        <input type='text' name='fname' onKeyUp={this.getNameHandler}/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input type='email' name='email' onKeyUp={this.getEmailHandler} />
                    </div>

                    <div>
                        <input type='submit' value="Save" />
                    </div>
                </form>
            </div>
        )    
    }
}
export default Form2;