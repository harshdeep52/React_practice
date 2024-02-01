import React from "react";

function Greek3(props){
    return(
        <div className="container card p-5 mt-5">
            <h3 className="text-center">Hello {props.name},</h3>
            <h3 className="text-center">Thank you for join us</h3>
            <h3 className="text-center">Verification sent to {props.email}</h3>
        </div>
    )
}
export default Greek3;