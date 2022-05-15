import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import axios from 'axios';
import logger from 'redux-logger';



const URLreducer = (state = '', action) => {
  if (action.type === 'SET_URL') {
    console.log('reducer payload:', action.payload);
    return action.payload;
    // axios.post('/link', action.payload)
    //       .then(response => {
    //         console.log('response after POST:', response.data);
    //       }).catch(err => {
    //         console.log(err);
    //       })
  }
  return state;
}

const storeInstance = createStore(
  combineReducers({
    URLreducer,
}),
applyMiddleware(logger),
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
