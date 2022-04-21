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

    const keysToIgnore = ["Shift", "CapsLock", "Alt", "Control"]
    const maxCharsBefore = 100;

    function handleCorrectKey() {
        setBeforeText(beforeText + afterText[0]);
        setAfterText(afterText.substring(1, afterText.length));

        if(afterText.length === 1) {
            let newBeforeText = beforeText + afterText[0];

            dispatch({type: "END_TUTORIAL"})
            setLineNumber(lineNumber+1);
            if(beforeText.length >= maxCharsBefore) {
                console.log("Too long")
                console.log(beforeText.substring(beforeText.length-maxCharsBefore, beforeText.length))
                newBeforeText =
                    beforeText.substring(
                        beforeText.length-maxCharsBefore,
                        beforeText.length
                    ) + afterText[0];
            }
            setBeforeText(newBeforeText);

            setAfterText(script.lines[lineNumber]);
        }
    }

    function handleKeyDown(key) {
        // console.log(script.lines.map(line => line.length).reduce((a, b) => a + b)-19);
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