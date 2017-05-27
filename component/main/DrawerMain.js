import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

import {
  DrawerNavigator,
  StackNavigator,
} from 'react-navigation';


import Home from '../home/Home'
import Mine from '../mine/Mine'
import More from '../more/More'
import Shop from '../shop/Shop'

import HomeDetail from '../home/HomeDetail'


export default class DrawerMain extends Component {

  render() {
    return <AppNavigator />;
  }
}



/*class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: '首页',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/icon_tabbar_homepage.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: '商家',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../img/icon_tabbar_merchant_normal.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});*/

const Drawer = DrawerNavigator({
  Home: {
    screen: Home,
  },
  Shop: {
    screen: Shop,
  },
  Mine: {
    screen: Mine,
  },
  More: {
    screen: More,
  },
},{
  drawerWidth: width * 3 / 5,
  drawerPosition: 'left',//默认为left
});

const AppNavigator = StackNavigator({
  Drawer: {
    screen: Drawer,
  },
  HomeDetail:{
    screen: HomeDetail,
  }
},{
  initialRouteName: 'Drawer',
  headerMode:'none',
});