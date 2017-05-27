import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class HomeDetail extends Component {

  static navigationOptions = {
    title: '详情页',
  }

  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress = {
            () => this.props.navigation.goBack()
          }
        >
<Text>
          返回上一页
        </Text>
        <Text>
          Name:{params.name + '\n'}
          Age:{params.age}
        </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});