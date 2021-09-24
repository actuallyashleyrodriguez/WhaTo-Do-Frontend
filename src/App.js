
import React, { Component } from 'react';
import TasksContainer from './containers/TasksContainer';
import './App.css';
import NotesContainer from './containers/NotesContainer';
import Affirmatons from './components/Affirmations'
import NavBar from './components/NavBar';

class App extends Component  {

  render() {
    return (
      <div className="App">
        <h1>WhaTo Do?</h1>
        <NavBar />
        <TasksContainer />
        <NotesContainer />
        <Affirmatons />
      </div>
    )
  }
}

export default App;
