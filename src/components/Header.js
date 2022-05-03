import './Header.css'
import ResetButton from "./ResetButton";
import React from "react";
import {Context} from "../Context";

function Header() {
    const {state} = React.useContext(Context);
    return (
        <div className="Header">
            <span className="Title">
                Shrek Script <br/> Speedrun
            </span>
            {state.ended ? "" : <ResetButton/>}
        </div>
    )
}

export default Header;