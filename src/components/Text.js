import './Text.css'
import Input from "./Input";
import React from 'react';
import script from "../assets/script.json";
import {Context} from "../Context";

function Text() {
    const {dispatch, state} = React.useContext(Context);
    const [lineNumber, setLineNumber] = React.useState(1);
    const [beforeText, setBeforeText] = React.useState("Click on the caret ");
    const [afterText, setAfterText] = React.useState(script.lines[0]);

    const keysToIgnore = ["Shift", "CapsLock", "Alt", "Control", "Backspace", "Escape"]
    const maxChars = 400;
    const maxLinesAfter = 4;

    function handleCorrectKey() {
        setBeforeText(beforeText + afterText[0]);
        setAfterText(afterText.substring(1, afterText.length));

        if(afterText.length === 1) {
            if(!state.tutorialDone) {
                dispatch({type: "END_TUTORIAL"})
                setBeforeText("");
            }
            setLineNumber(lineNumber + maxLinesAfter);
            setAfterText(script.lines.slice(lineNumber, lineNumber+maxLinesAfter).join(""));
            return;
        }
        if (state.tutorialDone && afterText.length <= maxChars) {
            console.log("ADDED TEXT")
            setLineNumber(lineNumber + 1);
            setAfterText(afterText.substring(1, afterText.length) + script.lines[lineNumber]);
        }

        if (beforeText.length >= maxChars) {
            console.log("RESET TEXT")
            setBeforeText(beforeText.substring(beforeText.length/2, beforeText.length)+ afterText[0]);
        }
    }

    function handleKeyDown(key) {
        if (keysToIgnore.includes(key)) {
            return;
        }
        if(afterText[0] === key) {
            handleCorrectKey()
        } else{
            console.error("Wrong key press!", key);
        }

        if(state.tutorialDone) {
            dispatch({type: "HANDLE_KEY_PRESS", correct: afterText[0] === key});
        }

    }

    return (
        <div className="Text">
            <span className="BeforeText">{ beforeText }</span>
            <Input handleKeyDown={handleKeyDown}/>
            <span className="AfterText">{ afterText }</span>
        </div>
    );
}

export default Text;