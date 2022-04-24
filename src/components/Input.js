import "./Input.css";
import React from 'react';
import {Context} from "../Context";

function Input(props) {
    const {dispatch, state} = React.useContext(Context);
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);

    let inputValue = "";

    function handleKeyDown(event) {
        inputValue = "";
        props.handleKeyDown(event.key);
    }

    function setFocused(value) {
        dispatch({type: "SET_FOCUSED", value});
    }

    function voidHandler() {
        return false;
    }

    return (
        <div className={`Input ${state.focused ? "" : "ShowBorder"}`}>
            <input
                onBlur={onBlur}
                onChange={voidHandler}
                onFocus={onFocus}
                onKeyDown={handleKeyDown}
                type="textfield"
                value={inputValue}
            />
            <svg className={`Caret ${state.focused ? "Blinking" : ""}`}>
                <rect fill="#dfddb5" width="100%" height="0.1rem"/>
            </svg>
        </div>
    );
}

export default Input;