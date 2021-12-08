import React from 'react';
import ReactDOM from 'react-dom';

//redux appropriate imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers/beersReducer';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(logger, thunk))

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
