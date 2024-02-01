import React from "react";

function Question(props) {

    return (
        <div>
            <div className="container card p-3 mt-2">
                <h3 >Details Form</h3>

                <form onSubmit={props.submit} >
                    <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="radio1">
                            Q . What are you doing currently doing?
                            <div>
                            </div>
                            <input type="radio" className="form-check-input" id="radio1" name="question1" value="option1"  />Teachine
                            <input type="radio" className="form-check-input" id="radio1" name="question1" value="option1"  />Student
                            <input type="radio" className="form-check-input" id="radio1" name="question1" value="option1"  />Engineer
                            <input type="radio" className="form-check-input" id="radio1" name="question1" value="option1"  />Other
                        </label>
                     </div>
                    <br></br>
                    <br></br>
                    <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="radio2">
                            Q . Please rate our course?
                            <div>
                            </div>
                            <input type="radio" className="form-check-input" id="radio2" name="question2" value="poor"  />Poor
                            <input type="radio" className="form-check-input" id="radio2" name="question2" value="good"  />Good
                            <input type="radio" className="form-check-input" id="radio2" name="question2" value="average"  />Average
                            <input type="radio" className="form-check-input" id="radio2" name="question2" value="excellent"  />Excellent
                        </label>
                     </div>
                    <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="radio2">
                            Q . q3?
                            <div>
                            </div>
                            <input type="radio" className="form-check-input" id="radio2" name="question3" value="poor"  />Poor
                            <input type="radio" className="form-check-input" id="radio2" name="question3" value="good"  />Good
                            <input type="radio" className="form-check-input" id="radio2" name="question3" value="average"  />Average
                            <input type="radio" className="form-check-input" id="radio2" name="question3" value="excellent"  />Excellent
                        </label>
                     </div>
                     <br></br>
                    <br></br>
                     <div className="form-check-inline">
                        <label className="form-check-label" htmlFor="radio1">Write Your Review Here?</label>
                        <textarea name="review" className="form-control"></textarea>
                     </div>       
                     <br></br>
                    <br></br>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Question;