import { createAction } from 'redux-actions';
import * as types from './actions';
import * as request from './request';

const { 
    GET_TODO_PENDING, 
    GET_TODO_SUCCESS,
    GET_TODO_FAILURE,
    SET_INPUT,
} = types;

// 액션
const getTodoPending = createAction(GET_TODO_PENDING);
const getTodoSuccess = createAction(GET_TODO_SUCCESS);
const getTodoFailure = createAction(GET_TODO_FAILURE);

export const setInput = createAction(SET_INPUT);

// 액션 함수
export const getTodo = () => dispatch => {
    dispatch(getTodoPending());
    
    return request.getTodoAPI().then(response => {
        
        dispatch(getTodoSuccess(response));

        return response;
    }).catch(error => {
        dispatch(getTodoFailure(error));

        throw(error);
    });
};

export const insertTodo = (text) => dispatch => {
    dispatch(getTodoPending());

    return request.insertTodoAPI(text).then(response => {
        dispatch(getTodoSuccess(response));

        return response;
    }).catch(error => {
        dispatch(getTodoFailure(error));

        throw(error);
    });
};

export const toggleTodo = (todoId) => dispatch => {
    dispatch(getTodoPending());

    return request.toggleTodoAPI(todoId).then(response => {
        dispatch(getTodoSuccess(response));

        return response;
    }).catch(error => {
        dispatch(getTodoFailure(error));

        throw(error);
    });
};

export const removeTodo = (todoId) => dispatch => {
    dispatch(getTodoPending());

    return request.removeTodoAPI(todoId).then(response => {
        dispatch(getTodoSuccess(response));

        return response;
    }).catch(error => {
        dispatch(getTodoFailure(error));

        throw(error);
    });
};