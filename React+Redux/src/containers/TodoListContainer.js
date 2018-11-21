import React, { Component } from 'react';
import TodoList from '../component/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {
    handleToggle = (id) => {
        const {TodosActions} = this.props;
        console.log(id);
        TodosActions.toggle(id);
    }
    handleRemove = (id) => {
        const {TodosActions} = this.props;
        TodosActions.remove(id);
    }

    render() {
        const { todos } = this.props;
        const { handleToggle, handleRemove } = this;

        return (
            <div> 
                <TodoList 
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoListContainer);