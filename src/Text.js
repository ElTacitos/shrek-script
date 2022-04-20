import './Text.css'
import Input from "./Input";
import React from 'react';
import script from "./assets/script.json";

function Text() {
    const [lineNumber, setLineNumber] = React.useState(0);
    const [pos, setPos] = React.useState(0);
    const [textToType, setTextToType] = React.useState(script.lines[lineNumber]);
    const [beforeText, setBeforeText] = React.useState("");
    const [afterText, setAfterText] = React.useState(script.lines[lineNumber]);

    function handleKeyDown(key) {
        console.log("test", afterText)
        if(afterText[0] === key) {
            setPos(pos + 1);

            setBeforeText(beforeText + afterText.substring(0, 1));
            setAfterText(afterText.substring(1, afterText.length));

            console.log("test", afterText)
            if(afterText.length === 1) {
                setPos(0);
                setLineNumber(lineNumber+1);
                setTextToType(script.lines[lineNumber]);
                setBeforeText("");
                setAfterText(script.lines[lineNumber]);
            }
        } else {
            console.error("Wrong key press!", key);
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