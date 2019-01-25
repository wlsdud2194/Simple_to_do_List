import { handleActions } from 'redux-actions';
import * as types from './actions';

const { 
    SET_INPUT, 
    GET_TODO_PENDING, 
    GET_TODO_SUCCESS, 
    GET_TODO_FAILURE 
} = types;

// 초기 state
const initialState = {
    text: '',
    pending: false,
    error: false,
    data: []
};

export default handleActions({
    [SET_INPUT]: (state, action) => {
        const { payload : value } = action;

        return {
            ...state,
            text: value
        };
    },
    [GET_TODO_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_TODO_SUCCESS]: (state, action) => {
        const { status, todos } = action.payload.data;

        return {
            ...state,
            text: '',
            data: todos,
            pending: false,
            error: false
        };
    },
    [GET_TODO_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        };
    }
}, initialState);
