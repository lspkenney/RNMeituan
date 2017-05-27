import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
} from 'react-native';

import {CommonItem } from '../widget/CustomeComponents'
import Api from '../api/Api'
import ShopListHeader from './ShopListHeader'

const { width } = Dimensions.get('window');
const ITEM_HEIGHT = width / 4 + 20;

export default class ShopFlatList extends Component {

  constructor(props){
    super(props);
    this.state = {
      isRefreshing: false,
      isNoMoreData: false,
      listData: [],
      typeIndex: 0,
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          ref="flatList"
          ListHeaderComponent={() => this.renderHeader()}
          data={this.state.listData}
          renderItem={this._renderItem}
          getItemLayout={(data, index) => (
            // item 的高度 ITEM_HEIGHT
            { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
          )}
          ListFooterComponent={() => this.renderFooter()}
          onRefresh={() => this._onRefresh()}
          refreshing={this.state.isRefreshing}
          onEndReached={() => this._onEndReached()}
        >
        </FlatList>
      </View>
    );
  }

  renderHeader(){
    return(
      <ShopListHeader
        types={this.props.types}
        onSelected={(index) => this.onSelected(index)}
        selectedIndex={this.state.typeIndex}
      ></ShopListHeader>
    );
  }

  onSelected(index){
    this.setState({
      typeIndex: index,
    })
    this.refs.flatList.props.onRefresh();
  }

  componentDidMount() {
    this.refs.flatList.props.onRefresh();
  }

  renderFooter(){
    if (this.state.isNoMoreData) {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 30 }}>
          <Text style={styles.footerTextStyle}>已加载完所有数据</Text>
        </View>
      );
    } else {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: 30 }}>
          <Text style={styles.footerTextStyle}>上拉加载更多</Text>
        </View>
      );
    }
  }

  _renderItem({item}){
    return (
      <CommonItem
        onPress={() => {
          alert('点击了' + item.mname);
        }}
        icon={{ uri: item.squareimgurl }}
        title={item.mname}
        subtitle={`[${item.range}]${item.title}`}
        price={item.price}
      />);
  }

  _onRefresh(){
      this.requestDataByAsync();
  }

  _onEndReached(){
    if (this.state.isNoMoreData) {
      alert('已加载完所有数据');
    } else {
      alert('加载更多');
    }
  }

  // 注意这个方法前面有async关键字
  async requestDataByAsync() {
    this.setState({
      isRefreshing: true,
    });
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await fetch(Api.recommend);
      let responseJson = await response.json();
      let datas = responseJson.data;

      //打乱顺序，模拟刷新到不同的数据，正式开发并没有实际意义
      datas.sort(function(){
        return 0.5 - Math.random();
      });

      //格式化数据
      datas.map((item, index) => {
        item.key = index;
        item.price = item.price + '元';
        item.squareimgurl = item.squareimgurl.replace('w.h', '160.0')
        return item;
      });
      this.setState({
        listData: datas,
        isRefreshing: false,
        isNoMoreData: true,
      })
    } catch (error) {
      alert("requestData " + error);
    }
  }

}

const styles = StyleSheet.create({
  footerTextStyle:{
    fontSize: 13,
    alignSelf: 'center',
  }
});