import React from "react";

function Greet2(props){
    return(
    <div className="container card p-3 mt-3">
        <h3>{props.name}</h3>
        <h3>Thank you for join us</h3>
        <h3>Verification sent to {props.email}</h3>
    </div>
    )

}

export default Greet2;