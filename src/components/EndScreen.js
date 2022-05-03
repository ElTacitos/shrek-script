import "./EndScreen.css"
import {getTime} from "../utils";
import React from 'react';
import {Context} from "../Context";
import ResetButton from "./ResetButton";

function EndScreen() {
    const {state} = React.useContext(Context);

    return (
        <div className="EndScreen">
            <h1 className="Title">You Win</h1>
            <span>Your time: {getTime(state.seconds)}</span>
            <span>Number of errors: {state.nbErrors}</span>
            <ResetButton/>
        </div>
    );
}

export default EndScreen;