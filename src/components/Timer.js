import React, { useEffect } from 'react';
import {Context} from "../Context";

function Timer() {
    const {dispatch, state} = React.useContext(Context);

    function getSeconds() {
        return String(state.seconds%60).padStart(2, '0');
    }

    function getMinutes() {
        return String(Math.floor(state.seconds/60)).padStart(2, '0');
    }

    function getHours() {
        return String(Math.floor(state.seconds/3600)).padStart(2, '0');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({type: "INCREMENT_SECONDS"});
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div>
            {`${getHours()}:${getMinutes()}:${getSeconds()}`}
        </div>
    )
}

export default Timer;