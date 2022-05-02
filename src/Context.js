import React from "react";
import script from "./assets/script.json";

const defaultAfterText = script.lines[0];
const defaultBeforeText = "Click on the caret ";
const defaultLineNumber = 1;

export const initialState = {
    afterText: getAfterText(),
    beforeText: getBeforeText(),
    focused: false,
    lineNumber: getLineNumber(),
    nbErrors: getNbErrors(),
    nbCorrect: getNbCorrect(),
    seconds: getSeconds(),
    tutorialDone: getTutorialDone(),
    ended: true,
}

function getAfterText() {
    if (localStorage.getItem("afterText")) {
        return localStorage.getItem("afterText");
    }
    localStorage.setItem("afterText", defaultAfterText);
    return defaultAfterText;
}

function getBeforeText() {
    if (localStorage.getItem("beforeText")) {
        return localStorage.getItem("beforeText");
    }
    localStorage.setItem("beforeText", defaultBeforeText);
    return defaultBeforeText;
}

function getLineNumber() {
    if (localStorage.getItem("lineNumber")) {
        return Number(localStorage.getItem("lineNumber"));
    }
    localStorage.setItem("lineNumber", String(defaultLineNumber));
    return defaultLineNumber;
}

function getNbErrors() {
    if (localStorage.getItem("nbErrors")) {
        return Number(localStorage.getItem("nbErrors"));
    }
    localStorage.setItem("nbErrors", String(0));
    return 0;
}

function getNbCorrect() {
    if (localStorage.getItem("nbCorrect")) {
        return Number(localStorage.getItem("nbCorrect"));
    }
    localStorage.setItem("nbCorrect", String(0));
    return 0;
}

function getSeconds() {
    if (localStorage.getItem("seconds")) {
        return Number(localStorage.getItem("seconds"));
    }
    localStorage.setItem("seconds", String(0));
    return 0;
}

function getTutorialDone() {
    if (localStorage.getItem("tutorialDone")) {
        return localStorage.getItem("tutorialDone") === "true";
    }
    localStorage.setItem("tutorialDone", String(false));
    return false;
}

export function reducer(state, action) {
    switch (action.type) {
        case "SET_BEFORE_TEXT": {
            localStorage.setItem("beforeText", action.beforeText);
            return {
                ...state,
                beforeText: action.beforeText,
            };
        }
        case "SET_AFTER_TEXT": {
            localStorage.setItem("afterText", action.afterText);
            return {
                ...state,
                afterText: action.afterText,
            };
        }
        case "SET_LINE_NUMBER": {
            const lineNumber = state.lineNumber + action.increment;
            localStorage.setItem("lineNumber", String(lineNumber));
            return {
                ...state,
                lineNumber,
            };
        }
        case "END_TUTORIAL":
            localStorage.setItem("tutorialDone", String(true));
            return {
                ...state,
                tutorialDone: true,
            }
        case "HANDLE_KEY_PRESS":
            if (action.correct) {
                localStorage.setItem("nbCorrect", String(state.nbCorrect + 1));
                return {
                    ...state,
                    nbCorrect: state.nbCorrect + 1,
                }
            } else {
                localStorage.setItem("nbErrors", String(state.nbErrors + 1));
                return {
                    ...state,
                    nbErrors: state.nbErrors + 1,
                }
            }
        case "INCREMENT_SECONDS":
            if(state.focused) {
                localStorage.setItem("seconds", String(state.seconds + 1));
                return {
                    ...state,
                    seconds: state.seconds + 1,
                }
            }
            return state;
        case "SET_FOCUSED":
            return {
                ...state,
                focused: action.value
            }
        case "END":
            return {
                ...state,
                ended: true,
                focused: false,
            }
        default:
            console.error("Action not handled: ", action);
            return state;
    }
}

export const Context = React.createContext();