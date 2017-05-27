import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';

import Home from '../home/Home'
import Mine from '../mine/Mine'
import More from '../more/More'
import Shop from '../shop/Shop'

import HomeDetail from '../home/HomeDetail'
import RealmDemo from '../realm/RealmDemo'//Realm数据库案例

import TabBarItem from '../widget/TabBarItem'


export default class Main extends Component {

  render() {
    return <AppNavigator />;
  }
}


const Tab = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: '首页',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../../img/icon_tabbar_homepage.png')}
          selectedImage={require('../../img/icon_tabbar_homepage_selected.png')}
        />
      )
    }
  },
  Shop: {
    screen: Shop,
    navigationOptions: {
      title: '商家',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../../img/icon_tabbar_merchant_normal.png')}
          selectedImage={require('../../img/icon_tabbar_merchant_selected.png')}
        />
      )
    }
  },
  Mine: {
    screen: Mine,
    navigationOptions: {
      title: '我的',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../../img/icon_tabbar_mine.png')}
          selectedImage={require('../../img/icon_tabbar_mine_selected.png')}
        />
      )
    }
  },
  More: {
    screen: More,
    navigationOptions: {
      title: '更多',
      tabBarIcon: ({ focused, tintColor }) => (
        <TabBarItem
          tintColor={tintColor}
          focused={focused}
          normalImage={require('../../img/icon_tabbar_misc.png')}
          selectedImage={require('../../img/icon_tabbar_misc_selected.png')}
        />
      )
    }
  },
}, {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      activeTintColor: 'orange',
      inactiveTintColor: 'gray',
      labelStyle:{fontSize: 12},
    },
    initialRouteName: 'Home',
    backBehavior:'none'
  });


const AppNavigator = StackNavigator({
  Tab: {
    screen: Tab,
  },
  HomeDetail:{
    screen: HomeDetail,
  },
  RealmDemo:{
    screen: RealmDemo,
  }
});
