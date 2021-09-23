
import React, { Component } from 'react';
import TasksContainer from './containers/TasksContainer';
import './App.css';
import NotesContainer from './containers/NotesContainer';

class App extends Component  {

  render() {
    return (
      <div className="App">
        <TasksContainer />
        <NotesContainer />
      </div>
    )
  }
}

export default App;
