import React,{Component} from "react";
import ImportCss from "./css/ImportCssEx.css";

class ImportCssEx extends Component{
    constructor(props){
        super(props);
        this.props  = props;
        this.state = {
            category : "css"
        }
    }

    render() {
        const style = {
            fontSize : "15px",
             color  : 'red'
        }
        return(
            <div className="container">
                <h4 id="headingText">This is CSS Example </h4>
                <h5 style={style}>This new css</h5>
            </div>
        )
    }
}
export default ImportCssEx;