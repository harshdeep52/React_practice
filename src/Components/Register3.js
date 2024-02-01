import React from "react";

function Register3(props){
    let btnStyle;
    let btnText;
    let btnTyppe;
    let btnClass;
    if(props.isshowPass === true){
        btnText = "Hide Password";
        btnTyppe = "text";
        btnClass = "btn btn-danger btn-sm p-2 m-2";
    }else{
        btnText = "Show Password";
        btnTyppe = "password";
        btnClass = "btn btn-primary btn-sm p-2 m-2";
    }
    return (
        <div className="container card p-3 mt-3">
            <h3>Register Form</h3>
            <form onSubmit={props.submit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>

                <div className="form-group">
                        <label>Password</label>
                        <input type={btnTyppe} className="form-control" name="password" />
                </div>

                <button type="submit" className="btn btn-primary ">Save</button>
                <button type="button" onClick={props.checkPassword} className={btnClass} style={btnStyle}>{btnText}</button>
            </form>
        </div>
    )
}
export default Register3;