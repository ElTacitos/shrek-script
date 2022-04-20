import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    function getSeconds() {
        return String(seconds%60).padStart(2, '0');
    }

    function getMinutes() {
        return String(Math.floor(seconds/60)).padStart(2, '0');
    }

    function getHours() {
        return String(Math.floor(seconds/3600)).padStart(2, '0');
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {`${getHours()}:${getMinutes()}:${getSeconds()}`}
        </div>
    )
}

export default Timer;