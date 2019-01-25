import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todoRequest from '../../redux_modules/todoMd/todoRequest';

class TodoInputContainer extends Component {

    handleChange = (e) => {
        const { value } = e.target;
        const { TodoRequest } = this.props;

        TodoRequest.setInput(value);
    }

    handleInsert = () => {
        const { TodoRequest, text } = this.props;

        TodoRequest.insertTodo(text);
        TodoRequest.setInput('');
    }

    render() {
        const { text } = this.props;
        const { handleChange, handleInsert } = this;
        
        return (
            <TodoInput 
                value={text}
                onChange={handleChange}
                onInsert={handleInsert}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.todoMd.text,
});

const mapDispatchToProps = (dispatch) => ({
    TodoRequest: bindActionCreators(todoRequest, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoInputContainer);