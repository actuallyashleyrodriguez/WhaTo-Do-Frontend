import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import taskReducer from './reducers/taskReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

let store = createStore(taskReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render( 
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>, 
document.getElementById('root')
);


