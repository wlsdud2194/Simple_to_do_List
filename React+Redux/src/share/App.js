import React, { Component } from "react";
import { Template } from "../component";
import TodoInputContainer  from "../containers/TodoInputContainer";
import TodoListContainer from "../containers/TodoListContainer";
import TodoSetContainer from "../containers/TodoSetContainer";

class App extends Component {
  render() {
    return (
      <Template>
        <TodoInputContainer />
        <TodoListContainer />
        <TodoSetContainer />
      </Template>
    );
  }
}

export default App;
