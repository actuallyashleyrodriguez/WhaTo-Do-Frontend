
import React, { Component } from 'react';
import TasksContainer from './containers/TasksContainer';
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

export default App;
