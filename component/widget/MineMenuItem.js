import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('window');

export default class MineMenuItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.rootViewStyle,this.props.style]}
      >
          <Image source={this.props.image} style={styles.iconStyle}></Image>
          <Text style={styles.titleStyle}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    rootViewStyle: {
      backgroundColor: 'white',
      width:width / 4,
      height: 64,
      alignItems: 'center',
      justifyContent: 'center'
    },
    iconStyle: {
      width: 30,
      height: 30,
    },
    titleStyle: {
      fontSize: 13,
      fontWeight:'bold',
      marginTop: 5,
    }
  });