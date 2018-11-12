import React, { Component } from 'react';
import styles from './TodoSet.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class TodoSet extends Component {
    state={
        message: '',
    }
    componentWillMount(){
        this.itemMessage(this.props.todos.length);
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.todos !== this.props.todos;
    }

    itemMessage = (len) => {
        if(len < 2){
            return `${len} item`;
        }
        else{
            return `${len} items`;
        }
    }

    render() {
        const {todos, onClear} = this.props;
        let len = todos.length;
        
        return (
            <div className={    cx('todo-set')}>
                <div className={cx('left')}>{this.itemMessage(len)}</div>

                <div 
                    className={cx('clear', {visible: true})} 
                    onClick={onClear}
                >Clear completed
                </div>
            </div>
        );
    }
}

export default TodoSet;

// className={cx({'choosing': true})}