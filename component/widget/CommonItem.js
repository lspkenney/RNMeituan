import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

//import Swipeout from 'react-native-swipeout';

const { width } = Dimensions.get('window');

export default class CommonItem extends Component {
  render() {
    return (
        <TouchableOpacity
          style={styles.rootViewStyle}
          onPress={this.props.onPress}
        >
          <Image
            source={this.props.icon}
            style={styles.iconStyle}
            resizeMode = 'contain'
          />
          <View style={styles.rightViewStyle}>
            <Text style={styles.titleStyle}
            numberOfLines={2}
            >{this.props.title}</Text>
            <Text style={styles.subtitleStyle}
              numberOfLines={2}
            >{this.props.subtitle}</Text>
            <Text style={styles.priceStyle}>{this.props.price}</Text>
          </View>
        </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  rootViewStyle: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f2f2f2',
    padding: 10,
    width: width,
  },
  iconStyle: {
    width: width / 4,
    height: width / 4,
    borderRadius: 5,
  },
  rightViewStyle: {
    paddingLeft: 20,
    height: width / 4,
    flex: 1,
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 3,
  },
  subtitleStyle: {
    fontSize: 12,
    color: 'gray',
    marginTop: 10,
  },
  priceStyle: {
    color: 'green',
    position: 'absolute',
    bottom: 3,
    left: 20,
    fontWeight: 'bold',
  },
});