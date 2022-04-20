import './App.css';
import React from 'react';
import Text from "./Text";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    const [charPassed, setCharPassed] = React.useState(0);
    const [nbError, setNbError] = React.useState(0);

    function passKeyPress(correct) {
        if (correct) {
            setCharPassed(charPassed + 1);
        } else {
            setNbError(nbError + 1);
        }
    }
    return (
        <div className="App">
            <Header/>
            <Text passKeyPress={passKeyPress}/>
            <Footer nbError={nbError} charPassed={charPassed}/>
        </div>
    );
}

export default App;
