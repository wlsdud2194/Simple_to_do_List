import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate/index'
import TodoInput from './components/TodoInput/index';
import TodoList from './components/TodoList/index';
import TodoSet from './components/TodoSet';

class App extends Component {
  id = 0;

  state = {
    input: '',
    todos: [],
  }

  handleChange = (e)=>{
    const { value } = e.target;
    this.setState({
      input: value,
    });
  }

  handleInsert = ()=>{
    const {input, todos} = this.state;

    if(input === ''){
      alert('일정을 입력해주세요');
    }
    else{
      const newTodo={
        text: input,
        done: false,
        id: this.id++,
      }
      this.setState({
        todos: [...todos, newTodo],
        input: '',
      })
    }
  }

  handleToggle = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo=>todo.id === id);//인덱스 반환
    // console.log(todos.map(todo=>todo.id));
    // console.log(id);
    const toggled={
      ...todos[index],
      done: !(todos[index].done) 
    }

    this.setState({
        todos: [
          ...todos.slice(0, index), 
          toggled,
          ...todos.slice(index+1, todos.length)]
    })
  }

  handleRemove = (id)=>{
    const { todos } = this.state;
    // const index = todos.findIndex(todo=> todo.id === id);

    this.setState({
      todos: todos.filter(todo=>todo.id !== id),
    })
  }

  handleClear = ()=>{
    const {todos} = this.state;
    const clearTodos = todos.filter(todo=>todo.done !== true);
    this.setState({
      todos: clearTodos,
    })

  }

  //렌더링
  render() {
    const {input, todos} = this.state;
    const {
      handleChange, 
      handleInsert,
      handleToggle,
      handleRemove,
      handleClear,
    } = this;

    return (
      <>
        <PageTemplate>
          <TodoInput 
            onChange={handleChange} 
            onInsert={handleInsert}
            value={input}
          />
          <TodoList 
            todos={todos} 
            onToggle={handleToggle}
            onRemove={handleRemove}
          />
          <TodoSet 
            todos={todos} 
            onClear={handleClear}
          />
        </PageTemplate>
      </>
    );
  }
}

export default App;
