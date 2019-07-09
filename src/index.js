import React from 'react';
import ReactDOM from 'react-dom';
import Navigations from './navigations';
import { InitialState, StateProvider } from './provider';
import Reducers from './reducers';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

ReactDOM.render(
  <StateProvider initialState={InitialState} reducers={Reducers}>
    <Navigations />
  </StateProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
