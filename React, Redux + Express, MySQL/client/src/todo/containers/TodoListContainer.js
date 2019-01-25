import React, { Component } from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as todoRequest from '../../redux_modules/todoMd/todoRequest';

class TodoListContainer extends Component {
    
    handleToggle = (todoId) => {
        const { TodoRequest } = this.props;

        TodoRequest.toggleTodo(todoId);
    }

    handleRemove = (todoId) => {
        const { TodoRequest } = this.props;

        TodoRequest.removeTodo(todoId);
    }

    render() {
        const { todos } = this.props;
        const { handleToggle, handleRemove } = this;
        
        return (
            <TodoList 
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todoMd.data,
});

const mapDispatchToProps = (dispatch) => ({
    TodoRequest: bindActionCreators(todoRequest, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListContainer);