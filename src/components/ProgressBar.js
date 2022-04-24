import './ProgressBar.css';
import React from "react";
import script from "../assets/script.json";
import {Context} from "../Context";

function ProgressBar() {
    const {state} = React.useContext(Context);
    const totalChars = script.lines.join("").length;
    return (
        <div className="ProgressBar">
            CHARS: {state.nbCorrect}/{totalChars}
            <svg className="Bar">
                <rect
                    width="100%"
                    height="100%"
                    fill="#443422"
                />
                <rect
                    width={`${state.nbCorrect*100/totalChars}%`}
                    height="100%"
                    fill="#dfddb5"
                />
            </svg>
        </div>
    );
}

export default ProgressBar;