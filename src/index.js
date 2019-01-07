import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import Routers from './router';
import axio from './utils/axios'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// const store = createStore();

window.Axios = axio
ReactDOM.render(<Routers />, document.getElementById('root'));
// ReactDOM.render(
// <Provider store={store}>
//   <Routers />
// </Provider>, document.getElementById('root'));