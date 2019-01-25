import axios from 'axios';

// todo 목록 요청
export const getTodoAPI = () => {
    try {
        return axios.get(`/api/todo/`);
    }
    catch(error) {
        console.error(error);
    }
};

// todo 추가 요청
export const insertTodoAPI = (text) => {
    try {
        return axios.post('/api/todo/', {
            text
        });
    }
    catch(error) {
        console.error(error);
    }
};

// done(수행함) 토글 요청
export const toggleTodoAPI = (todoId) => {
    try {
        return axios.put(`/api/todo/${todoId}`);
    }
    catch(error) {
        console.error(error);
    }
};

// todo 삭제 요청
export const removeTodoAPI = (todoId) => {
    try {
        return axios.delete(`/api/todo/${todoId}`);
    }
    catch(error) {
        console.error(error);
    }
};