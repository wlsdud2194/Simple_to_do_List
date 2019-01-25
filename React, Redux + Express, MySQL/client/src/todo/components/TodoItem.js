import React from 'react';
import styles from '../asset/TodoStyle.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const TodoItem = ({done, children, onToggle, onRemove}) => {
    
    return (
        <div className={'todo-item'} onClick={onToggle}>
            <input type='checkbox' className={'tick'} id="cb" checked={done} readOnly/>
            <label htmlFor='cb'></label>
            <div className={cx('text', {done})}>{children}</div>
            <div className={'delete'} onClick={(event) => {
                onRemove();
                event.stopPropagation();
            }} >[Delete]</div>
        </div>
    );
};

export default TodoItem;