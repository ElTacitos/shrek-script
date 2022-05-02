import './App.css';
import React from 'react';
import Text from "./components/Text";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Context, initialState, reducer} from "./Context";
import EndScreen from "./components/EndScreen";

function App() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const [charPassed, setCharPassed] = React.useState(0);
    const [nbError, setNbError] = React.useState(0);

    function passKeyPress(correct) {
        if (correct) {
            setCharPassed(charPassed + 1);
        } else {
            setNbError(nbError + 1);
        }
    }

    if (state.ended) {
        return (
            <Context.Provider value={{state, dispatch}}>
                <div className="App">
                    <Header className="Header"/>
                    <EndScreen className="EndBody"/>
                </div>
            </Context.Provider>
        );
    }

    return (
        <Context.Provider value={{state, dispatch}}>
            <div className="App">
                <Header className="Header"/>
                <Text className="Body" passKeyPress={passKeyPress}/>
                <Footer className="Footer" charPassed={charPassed} nbError={nbError}/>
            </div>
        </Context.Provider>
    );
}

export default App;
