import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class PagerMenuItem extends Component {
  render() {
    return (
      <TouchableOpacity 
      onPress={this.props.onPress}
      style={styles.container}>
        <Image source={this.props.menuIcon} style={styles.iconStyle} resizeMode="contain"></Image>
        <Text style={styles.textStyle}>{this.props.menuName}</Text>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
    width: width / 5,
    height: width/ 5,
  },
  iconStyle: {
    height: width / 9,
    width: width / 9,
    margin: 5,
  },
  textStyle: {
    fontSize: 13,
    marginTop: 5,
  },
});