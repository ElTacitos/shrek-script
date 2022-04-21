import "./Footer.css";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import React from "react";
import {Context} from "../Context";

function Footer() {
    const {state} = React.useContext(Context);
    return (
        <div className="Footer">
            <span>Errors:{state.nbErrors}</span>
            <ProgressBar/>
            <Timer/>
        </div>
    )
}

export default Footer;