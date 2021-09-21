
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TasksContainer from './containers/TasksContainer';
import { fetchTasks } from './actions/fetchTasks';
import './App.css';

class App extends Component  {

  render() {
    return (
      <div className="App">
        <TasksContainer />
      </div>
    )
  }
}

export default connect(null, {fetchTasks} )(App);
