import "./Input.css";
import React from 'react';

function Input(props) {
    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);

    let inputValue = "";

    function handleKeyDown(event) {
        inputValue = "";
        props.handleKeyDown(event.key);
    }

    function voidHandler() {
        return false;
    }

    return (
        <div className="Input">
            <input
                onBlur={onBlur}
                onChange={voidHandler}
                onFocus={onFocus}
                onKeyDown={handleKeyDown}
                type="textfield"
                value={inputValue}
            />
            <svg className={`Caret ${focused ? "Blinking" : ""}`}>
                <rect fill="white" width="100%" height="0.1rem"/>
            </svg>
        </div>
    );
}

export default Input;