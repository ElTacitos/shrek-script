import React, { useEffect } from 'react';
import {Context} from "../Context";
import {getTime} from "../utils";

function Timer() {
    const {dispatch, state} = React.useContext(Context);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({type: "INCREMENT_SECONDS"});
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div>
            {getTime(state.seconds)}
        </div>
    )
}

export default Timer;