import './Text.css'
import Input from "./Input";
import React from 'react';
import script from "../assets/script.json";
import {Context} from "../Context";

function Text() {
    const {dispatch} = React.useContext(Context);
    const [lineNumber, setLineNumber] = React.useState(1);
    const [beforeText, setBeforeText] = React.useState("Click on the caret ");
    const [afterText, setAfterText] = React.useState(script.lines[0]);

    const keysToIgnore = ["Shift", "CapsLock", "Alt", "Control"]

    function handleKeyDown(key) {
        console.log(script.lines.map(line => line.length).reduce((a, b) => a + b)-19);

        if (keysToIgnore.includes(key)) {
            return;
        }
        if(afterText[0] === key) {
            setBeforeText(beforeText + afterText.substring(0, 1));
            setAfterText(afterText.substring(1, afterText.length));

            if(afterText.length === 1) {
                console.log("lineNumber+1", lineNumber+1)
                setLineNumber(lineNumber+1);
                setBeforeText("");
                console.log("lineNumber", lineNumber)
                setAfterText(script.lines[lineNumber]);
            }
        } else{
            console.error("Wrong key press!", key);
        }

        if(lineNumber !== 1) {
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