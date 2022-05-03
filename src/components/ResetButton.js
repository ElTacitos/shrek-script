import "./ResetButton.css"
import React from "react";
import {Context} from "../Context";

function ResetButton() {
    const {dispatch} = React.useContext(Context);

    function onReset(){
        dispatch({type:"RESET"});
    }

    return (
        <button className="ResetButton" onClick={onReset}>
            Reset
        </button>
    )
}

export default ResetButton;