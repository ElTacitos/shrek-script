import './ProgressBar.css';
import React from "react";
import {Context} from "../Context";

function ProgressBar() {
    const {state} = React.useContext(Context);
    const totalChars = 48029;
    return (
        <div className="ProgressBar">
            CHARS: {state.nbCorrect}/{totalChars}
            <svg className="Bar">
                <rect
                    width="100%"
                    height="100%"
                    fill="#2F2F2F"
                />
                <rect
                    width={`${state.nbCorrect*100/totalChars}%`}
                    height="100%"
                    fill="#FFCB74"
                />
            </svg>
        </div>
    );
}

export default ProgressBar;