import React from "react";

function Details(props) {

    return (
        <div>
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
                    <div>
                        <button type="submit" className="btn btn-primary btn-sm" >Next</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Details;