import React from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux'; 

// import * as firebase from 'firebase';
// import { firebaseConfig } from './src/configs/config';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './src/reducers';

import UserProfile from './src/components/UserProfile';

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
        <UserProfile />
      </Provider>
    );
  }
}
