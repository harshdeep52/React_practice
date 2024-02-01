import React from "react";

function Register(props){
    return (
        <div className="container card p-3 mt-3 ">
            <form onSubmit={props.submit}> 
                <h2 className="text-center">Register Form </h2>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input type="password" name="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Register</button>
            </form>
        </div>
    )
}

export default Register;