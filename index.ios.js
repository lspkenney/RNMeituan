/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import Main from './component/main/Main'

export default class RNMeituan extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

AppRegistry.registerComponent('RNMeituan', () => RNMeituan);
