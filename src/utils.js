import script from "./assets/script.json";

function getSeconds(seconds) {
    return String(seconds%60).padStart(2, '0');
}

function getMinutes(seconds) {
    return String(Math.floor(seconds/60)).padStart(2, '0');
}

function getHours(seconds) {
    return String(Math.floor(seconds/3600)).padStart(2, '0');
}


export function getTime(seconds) {
    return `${getHours(seconds)}:${getMinutes(seconds)}:${getSeconds(seconds)}`;
}

export function getTotalChars() {
    return script.lines.join("").length-script.lines[0].length;
}