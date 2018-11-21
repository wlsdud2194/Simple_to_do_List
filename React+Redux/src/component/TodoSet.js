import React, { Component } from 'react';
import "../assets/uiStyle.scss";

class TodoSet extends Component {
    render() {
        const { todoSize, onFilter } = this.props;
        const item = (todoSize>1) ? "items" : "item";
        return (
            <div className="setting_bar">
                <div className="op_1">{todoSize} {item}</div>
                <div className="op_2" onClick={onFilter}>Clear completed</div>
            </div>
        );
    }
}

export default TodoSet;