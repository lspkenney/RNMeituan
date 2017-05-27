import React, { Component } from 'react';
import {
  View,
} from 'react-native';

export default class Spacing extends Component {
  render() {
    return (
      <View
        style={{flexDirection: 'row', height: 16, backgroundColor:'transparent'}}
      ></View>
    );
  }
}