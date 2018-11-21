import React, { Component } from 'react';

import style from "../assets/uiStyle.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

class TodoInput extends Component {
    handleKeyPress = (e) => {
        const {onInsert} = this.props;

        if( e.key === "Enter" ){
            onInsert();
        }
    }

    render() {
        const { handleKeyPress } = this;
        const { value, onInsert, onChange } = this.props;

        return (
            <div className={cx('todo-input')}>
                <input 
                    type="text" 
                    placeholder="To Do"
                    onKeyPress={handleKeyPress}
                    onChange={onChange}
                    value={value}
                    ref={(ref) => this.input = ref}
                />
                <div
                    className={cx('add-button')} 
                    onClick={()=>{
                        this.input.focus();
                        onInsert();
                    }}
                >ADD</div>
            </div>
        );
    }
}

export default TodoInput;