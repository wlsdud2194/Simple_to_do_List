import React, { Component } from 'react';
import TodoItem from '../TodoItem/index';

class TodoList extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     const {onNumber} = this.props;
    //     if(prevProps.todos !== this.props.todos){
    //         return ()=>onNumber();
    //     }
    //     return;
    // }

    render() {
        const {todos, onToggle, onRemove} =this.props;
        
        const todoList = todos.map(todo=>(
                <TodoItem 
                    key={todo.id} 
                    done={todo.done}
                    onToggle={()=>onToggle(todo.id)}
                    onRemove={()=>onRemove(todo.id)}
                >
                    {todo.text}
                </TodoItem>
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;