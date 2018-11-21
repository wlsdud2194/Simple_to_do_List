import React, { Component } from 'react';
import { TodoSet } from "../component";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as todosActions from "../modules/todos";

class TodoSetContainer extends Component {
    handleFilter = () => {
        const { TodosActions } = this.props;
        TodosActions.filter();
    }

    render() {
        const {todos} = this.props;
        const { handleFilter } = this;
        return (
            <TodoSet
                todoSize={todos.size}
                onFilter={handleFilter}
            />
        );
    }
}

//state props
const mapStateToProps = (state) => ({
    todos: state.todos,
});

//state action(event)
const mapDispatchToProps = (dispatch) => ({
    TodosActions: bindActionCreators(todosActions, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoSetContainer);