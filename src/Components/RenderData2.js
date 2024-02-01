import React,{Component} from "react";

class RenderData2 extends Component{

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            users : [
                {
                    "id": 1,
                    "firstName": "Terry",
                    "lastName": "Medhurst",
                    "maidenName": "Smitham",
                    "age": 50,
                    "gender": "male",
                    "email": "atuny0@sohu.com",
                },
                {
                    "id": 2,
                    "firstName": "Sheldon",
                    "lastName": "Quigley",
                    "maidenName": "Cole",
                    "age": 28,
                    "gender": "male",
                    "email": "hbingley1@plala.or.jp",
                },
                {
                    "id": 3,
                    "firstName": "Terrill",
                    "lastName": "Hills",
                    "maidenName": "Hoeger",
                    "age": 38,
                    "gender": "male",
                    "email": "rshawe2@51.la",
                },
                {
                    "id": 4,
                    "firstName": "Miles",
                    "lastName": "Cummerata",
                    "maidenName": "Maggio",
                    "age": 49,
                    "gender": "male",
                    "email": "yraigatt3@nature.com",
                }
            ],
            isShow:false,
        }
        this.toggleHandler = this.toggleHandler.bind(this);
    }

    toggleHandler(){
        this.setState({isShow: ! this.state.isShow});
    }

    render(){
        let userData;
        userData = this.state.users.map((user)=>{
            return <div id="renderDataID" key={user.id}>{user.firstName},{user.lastName},{user.email}</div>
        })
        return(
            <div>
            <button onClick={this.toggleHandler}>Hide/Show</button>
            {
                this.state.isShow === true ? userData : ""
            }
            </div>            
        )
    }
}
export default RenderData2;