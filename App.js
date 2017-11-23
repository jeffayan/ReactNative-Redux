/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Provider} from 'react-redux';
import Home from './App/Home';
import ConfigureStore from './App/ConfigureStore';

const store = ConfigureStore();

export default class App extends Component {

  render() {
    return (
      <Provider store = {store}>
           <Home/>
       </Provider> 
    );
  }
}


