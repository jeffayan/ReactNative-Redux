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
import {Landing} from './App/Pages'

import ConfigureStore from './App/ConfigureStore';

const store = ConfigureStore();

import SideMenu from 'react-native-side-menu';

export default class App extends Component {

    
  render() {
    return (
      <Provider store = {store}>
          <Landing/>
       </Provider> 
    );
  }
}


