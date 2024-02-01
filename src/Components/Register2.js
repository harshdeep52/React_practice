import React from "react";

function Register2(props){
    let btnStyle;
    btnStyle = {
        backgroundColor:'green',
        color: 'white'
    }
    let btnText;
    let btnType;
    if(props.showPass === true){
        btnType = "text";
        btnStyle.backgroundColor = 'red';
        btnText = "Hide Password";
    }else{
        btnType = "password";
        btnText = "Show Password";
    }
   return(
     <div className="container card p-3 mt-2">
        <h3>Registration Form</h3>
        <form onSubmit={props.submit}>
            <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" className="form-control" />
            </div>      

            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" className="form-control" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type={btnType} name="password" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn  m-3" style={btnStyle} onClick={props.click}>{btnText}</button>
        </form>
    </div>
    )
}
export default Register2;