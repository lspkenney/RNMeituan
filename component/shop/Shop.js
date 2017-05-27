import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import ShopFlatList from './ShopFlatList'

export default class Shop extends Component {

  render() {
    return (
      <ScrollableTabView
        style={styles.container}
        tabBarBackgroundColor='white'
        tabBarActiveTextColor='#FE566D'
        tabBarInactiveTextColor='#555555'
        tabBarTextStyle={styles.tabBarText}
        tabBarUnderlineStyle={styles.tabBarUnderline}
      >
      {this.renderViews()}
      </ScrollableTabView>
    );
  }


  renderViews(){
    let titles = ['享美食', '住酒店', '爱玩乐', '全部'];
    let types = [
      ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
      ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠', '成人情趣'],
      ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '大宝剑', '电影院', '美发', '美甲'],
      []
    ];
    let shopFlatListViews = [];
    for(let i in titles){
      shopFlatListViews.push(
        <ShopFlatList
          tabLabel={titles[i]}
          types={types[i]}
          navigation={this.props.navigation}
          key={i}
        />
      );
    }
    return shopFlatListViews;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  tabBarText: {
    fontSize: 14,
    marginTop: 13,
  },
  tabBarUnderline: {
    backgroundColor: '#FE566D',
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});