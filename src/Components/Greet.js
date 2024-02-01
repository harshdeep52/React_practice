import React from "react";

function Greet(props){
    return (
        <div className="container card p-3 mt-2">
            <h3>{props.name}</h3>
            <h3>Thank you for join us</h3>
            <h3>Verification sent to yout {props.email}</h3>
        </div>
    )
}

export default Greet;