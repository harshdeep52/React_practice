import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";

class Container extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name:null,
            email : null,
            question : {
                q1:null,
                q2:null,
                q3:null,
                other:null,
            },
            issubmitted:false,

        }
        this.submitHandler = this.submitHandler.bind(this);
        this.questionSubmitHandler = this.questionSubmitHandler.bind(this);
    }

    submitHandler(event){
        event.preventDefault();
        let name = event.target.name.value;
        let email = event.target.email.value;

        this.setState({name,email,issubmitted:true},()=>{
            console.log(this.state);
        })
    }

    questionSubmitHandler(event){
        event.preventDefault();
        const  question = {};
        
        question.q1 = event.target.question1.value;
        question.q2 = event.target.question2.value;
        question.q3 = event.target.question3.value;
        question.q4 = event.target.review.value;

        // console.log(question);
        this.setState({question},()=>{
            console.log(this.state);
        })
    }

    render() {
        return (
            <div className="container-fluid ">
                <div className="container card p-3 mt-2">
                    <h1 className="text-center text-primary">WsCube Tech Survey</h1>
                </div>
                {
                this.state.name === null || this.state.email === null ? (<Details submit={this.submitHandler}/> ):(<Question submit={this.questionSubmitHandler}/>)
                }
                

            </div>
        )
    }


}

export default Container;