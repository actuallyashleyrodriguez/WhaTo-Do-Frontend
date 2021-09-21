
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTasks } from './actions/fetchTasks';
import './App.css';

class App extends Component  {

 componentDidMount() {
   this.props.fetchTasks()
 }

  render() {
    return (
      <div className="App">
        App
      </div>
    )
  }
}

export default connect(null, {fetchTasks} )(App);
