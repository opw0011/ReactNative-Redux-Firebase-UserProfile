import React from 'react';
import { Provider } from 'react-redux'; 

// import * as firebase from 'firebase';
// import { firebaseConfig } from './src/configs/config';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './src/reducers';

import Profile from './src/containers/Profile';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Profile />
      </Provider>
    );
  }
}
