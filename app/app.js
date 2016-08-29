
import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers'

import Navigator from './navigator/navigator';
import './meteor'

const reducer = combineReducers(reducers);
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}


export default App
