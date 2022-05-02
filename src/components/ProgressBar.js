import './ProgressBar.css';
import React from "react";
import {Context} from "../Context";
import {getTotalChars} from "../utils";

function ProgressBar() {
    const {state} = React.useContext(Context);

    return (
        <div className="ProgressBar">
            CHARS: {state.nbCorrect}/{getTotalChars()}
            <svg className="Bar">
                <rect
                    width="100%"
                    height="100%"
                    fill="#443422"
                />
                <rect
                    width={`${state.nbCorrect*100/getTotalChars()}%`}
                    height="100%"
                    fill="#dfddb5"
                />
            </svg>
        </div>
    );
}

export default ProgressBar;