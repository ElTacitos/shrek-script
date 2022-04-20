import './App.css';
import Input from "./Input";
import script from "./assets/script.json"
import React from 'react';

function App() {
    const [lineNumber, setLineNumber] = React.useState(0);
    const [text, setText] = React.useState("");
    const [pos, setPos] = React.useState(0);
    const [textToType, setTextToType] = React.useState(script.lines[lineNumber]);

    function handleKeyDown(key) {
        if(textToType[pos] === key) {
            setPos(pos + 1);
            setText(text+key);

            if(pos === textToType.length-1) {
                setText("");
                setPos(0);
                setLineNumber(lineNumber+1);
                setTextToType(script.lines[lineNumber]);
            }
        } else {
            console.error("Wrong key press!", key);
        }
    }

    return (
        <div className="App">
            <span>{ textToType }      {textToType[pos]}{pos}</span>
            <br/>
            <span>YOU: { text }</span>
            <Input handleKeyDown={handleKeyDown}/>
        </div>
    );
}

export default App;
