import React, { Component } from 'react';
import '../asset/TodoStyle.scss';
// import styles from '../asset/TodoStyle.scss';
// import classnames from 'classnames/bind';

// const cx = classnames.bind(styles);

class TodoInput extends Component {
    handleKeyPress = (e) => {
        const {onInsert, text} = this.props;

        if( e.key === "Enter" ){
            if(text === '') {
                alert('TODO를 입력해주세요');
                return;
            }
            onInsert();
        }
    }

    render() {
        const { handleKeyPress } = this;
        const { text, onChange ,onInsert } = this.props;

        return (
            <div className={'todo-inputArea'}>
                <input
                    className={'todoInput'}
                    type='text'
                    onChange={onChange}
                    onKeyPress={handleKeyPress}
                    value={text}
                    ref={(ref) => this.input=ref}
                />
                <div
                    className={'addBtn'}    
                    onClick={() => {
                        if(text === '') {
                            alert('TODO를 입력해주세요');
                            return;
                        }
                        this.input.focus();
                        onInsert();
                    }}
                >
                    ADD
                </div>
            </div>
        );
    }
}

export default TodoInput;