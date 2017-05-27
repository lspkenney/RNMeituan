import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class DiscountMenuItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.container}>
        <View style={styles.leftViewStyle}>
          <Text style={[styles.title,{color:this.props.titleColor}]}>{this.props.title}</Text>
          <Text style={[styles.subTitle, {color:this.props.subTitleColor}]}>{this.props.subTitle}</Text>
        </View>
        <Image source={this.props.icon} style={styles.iconStyle} resizeMode="contain"></Image>
      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2,
    height: width / 4,
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#f2f2f2',
  },
  iconStyle: {
    height: width / 5,
    width: width / 5,
    marginLeft: 10,
    borderRadius: 90,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    marginTop: 10,
  },
  leftViewStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});