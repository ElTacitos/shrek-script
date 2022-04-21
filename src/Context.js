import React from "react";

export const initialState = {
    focused: false,
    nbErrors: 0,
    nbCorrect: 0,
    seconds: 0,
    tutorialDone: false,
}

export function reducer(state, action) {
    switch (action.type) {
        case "HANDLE_KEY_PRESS":
            if (action.correct) {
                return {
                    ...state,
                    nbCorrect: state.nbCorrect + 1,
                }
            } else {
                return {
                    ...state,
                    nbErrors: state.nbErrors + 1,
                }
            }
        case "INCREMENT_SECONDS":
            return {
                ...state,
                seconds: state.focused ? state.seconds + 1 : state.seconds
            }
        case "SET_FOCUSED":
            return {
                ...state,
                focused: action.value
            }
        default:
            return state;
    }
}

export const Context = React.createContext();