import React,{Component} from "react";
import "./css/RenderData.css";

class RenderData extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state ={ 
            persons:[{
                id : 1,
                name: "samn ",
                city : "San Francisco",
                age   : 37            
            },
            {
                id : 2,
                name : "michael",
                city : "Los Angeles",
                age  : 25
            },
            {
                id : 3,
                name : "curran",
                city : "washington",
                age  : 30 
            }
          ],
          isShow : false,

        };
        this.toggleHandler = this.toggleHandler.bind(this);        
    }

    toggleHandler(){
        alert();
    }

    render(){
        let persons;
        persons = this.state.persons.map((person)=>{
            return <p id="renderDataID" key={person.id}>{person.name} {person.city} {person.age}</p>
        });

        return(<div >
            <button onClick={this.toggleHandler}>Toogle Data</button>
            {
                  this.state.isShow === true ? persons : ""
            }
            </div>);
    }
}

export default RenderData;