import './Text.css'
import Input from "./Input";
import React from 'react';
import script from "../assets/script.json";
import {Context} from "../Context";

function Text() {
    const {dispatch, state} = React.useContext(Context);

    const keysToIgnore = ["Shift", "CapsLock", "Alt", "Control", "Backspace", "Escape"]
    const maxChars = 400;
    const maxLinesAfter = 4;

    function handleCorrectKey() {
        dispatch({type: "SET_BEFORE_TEXT", beforeText: state.beforeText + state.afterText[0]})
        dispatch({type: "SET_AFTER_TEXT", afterText: state.afterText.slice(1)})

        if(state.afterText.length === 1) {
            if(!state.tutorialDone) {
                dispatch({type: "END_TUTORIAL"})
                dispatch({type: "SET_BEFORE_TEXT", beforeText: ""})
            }
            dispatch({type: "SET_LINE_NUMBER", increment: maxLinesAfter});
            const newAfterText = script.lines.slice(state.lineNumber, state.lineNumber+maxLinesAfter).join("");
            dispatch({type: "SET_AFTER_TEXT", afterText: newAfterText})
            return;
        }
        if (state.tutorialDone && state.afterText.length <= maxChars) {
            console.log("ADDED TEXT")
            dispatch({type: "SET_LINE_NUMBER", increment: 1});
            dispatch({type: "SET_AFTER_TEXT", afterText: state.afterText.slice(1) + script.lines[state.lineNumber]})
        }

        if (state.beforeText.length >= maxChars) {
            console.log("RESET TEXT")
            const curBeforeText = state.beforeText;
            const newBeforeText = curBeforeText.substring(curBeforeText.length/2, curBeforeText.length)+ state.afterText[0]
            dispatch({type: "SET_BEFORE_TEXT", beforeText: newBeforeText});
        }
    }

    function handleKeyDown(key) {
        if (keysToIgnore.includes(key)) {
            return;
        }
        if(state.afterText[0] === key) {
            handleCorrectKey()
        } else{
            console.error("Wrong key press!", key);
        }

        if(state.tutorialDone) {
            dispatch({type: "HANDLE_KEY_PRESS", correct: state.afterText[0] === key});
        }

    }

    return (
        <div className="Text">
            <span className="BeforeText">{ state.beforeText }</span>
            <Input handleKeyDown={handleKeyDown}/>
            <span className="AfterText">{ state.afterText }</span>
        </div>
    );
}

export default Text;