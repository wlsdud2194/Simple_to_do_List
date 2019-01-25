import React, { Component } from 'react';
import * as components from './components';
import * as container from './containers';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoRequest from '../redux_modules/todoMd/todoRequest';

import './asset/TodoStyle.scss';
import loadingImg from '../imgs/loadingImg.gif';
import errorImg from '../imgs/error.png';

class Todo extends Component {
  componentDidMount() {
    const {TodoRequest} = this.props;

    TodoRequest.getTodo();
  }

  render() {
    const { loading, data, error } = this.props;
    const { Template } = components;
    const { TodoInputContainer, TodoListContainer } = container;

    return (
      <Template>
        <TodoInputContainer />
        {
          loading ? (
            <div className="statusImg"><img src={loadingImg} alt="loading..." /></div>
          ) : (
            error
            ) ? (
              <div className="statusImg"><img src={errorImg} alt="error..." /></div>
              ) : (<TodoListContainer />)
        }
      </Template>
    );
  }
}

export default connect(
  (state) => ({
    loading: state.todoMd.pending,
    data: state.todoMd.data,
    error: state.todoMd.error
  }),
  (dispatch) => ({
    TodoRequest: bindActionCreators(todoRequest, dispatch)
  })
)(Todo);