import React, { Component } from 'react';
import TodoInput from "../component/TodoInput";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as inputActions from "../modules/input";
import * as todosActions from "../modules/todos";


class TodoInputContainer extends Component {
    id = -1;
    getId = () => {
        return ++this.id;
    }

    handleChange = (e) => {
        const { value } = e.target;
        const { InputActions } = this.props;

        InputActions.setInput( value );
    }

    handleInsert = () => {
        const { InputActions, TodosActions, value } = this.props;
        if(value === ""){
            alert("To Do를 입력해주세요.");
            return 0;
        }
        const todo = {
            id: this.getId(),
            text: value,
            done: false
        };
        TodosActions.insert(todo);
        InputActions.setInput("");
    }

    render() {
        const { value } = this.props;
        const {handleChange, handleInsert} = this;
        
        return (
            <TodoInput 
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}
            />
        );
    }
}

//subscribe 구독
const mapStateToProps = (state) => ({
    value: state.input.get('value'),
});

const mapDispatchToProps = (dispatch) => ({
    InputActions: bindActionCreators(inputActions, dispatch),
    TodosActions: bindActionCreators(todosActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoInputContainer);