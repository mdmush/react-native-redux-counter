import { INCREMENT_COUNTER, DECREMENT_COUNTER, CLEAR_COUNTER, SET_COUNTER } from './types'

export const counterIncrement = () => {
    return {
        type: INCREMENT_COUNTER
    };
}

export const counterDecrement = () => {
    return {
        type: DECREMENT_COUNTER
    };
}

export const counterClear = () => {
    return {
        type: CLEAR_COUNTER
    };
}

export const counterSet = (recievednumber) => {
    return {
        type: SET_COUNTER,
        payload: recievednumber
    };
}