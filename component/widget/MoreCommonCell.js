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

export default class MoreCommonCell extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.rootViewStyle,this.props.style]}
      >
          <Image source={this.props.image} style={[styles.iconStyle, { marginRight: 5 }]}></Image>
          <Text style={styles.titleStyle}>{this.props.title}</Text>
          <View style={styles.rightViewStyle}>
            <Text style={styles.subTitleStyle}>{this.props.subtitle}</Text>
            <Image source={require('../../img/cell_arrow.png')} style={styles.arrowStyle}></Image>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    rootViewStyle: {
      flexDirection: 'row',
      backgroundColor: 'white',
      width:width,
      height: 44,
      paddingLeft: 16,
      paddingRight: 10,
      alignItems: 'center',
      borderBottomWidth: 0.2,
      borderBottomColor: '#d8d8d8'
    },
    iconStyle: {
      width: 25,
      height: 25,
    },
    arrowStyle: {
      width: 16,
      height: 16,
    },
    titleStyle: {
      fontSize: 13,
      fontWeight:'bold',
    },
    rightViewStyle: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    subTitleStyle: {
      fontSize: 12,
      color: 'gray',
      marginRight: 5,
    },
  });