import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_HEIGHT = width / 4 + 20;

import { Spacing, MoreCommonCell, MineMenuItem, CommonItem } from '../widget/CustomeComponents'
import Api from '../api/Api'

export default class Mine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      isRefreshing: false,
      isNoMoreData: false,
    }
  }


  render() {
    return (
      <FlatList
        ref="flatList"
        ListHeaderComponent={this.renderHeader}
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
    );
  }

  componentDidMount() {
    this.refs.flatList.props.onRefresh();
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

  requestData() {
    this.setState({
      isRefreshing: true,
    });
    fetch(Api.recommend)
      .then((response) => response.json())
      .then((responseJson) => {
        //alert("requestData " + JSON.stringify(responseJson.data));
        //return responseJson.data;
        let datas = responseJson.data;

        //打乱顺序，模拟刷新到不同的数据，正式开发并没有实际意义
        datas.sort(function(){
          return 0.5 - Math.random();
        });


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
      })
      .catch((error) => {
        alert("requestData " + error);
      });
  }

  _onRefresh() {
    this.requestDataByAsync();
  }

  _onEndReached() {
    //alert('_onEndReached')
    if (this.state.isNoMoreData) {
      alert('已加载完所有数据');
    } else {
      alert('加载更多');
    }
  }


  renderFooter() {
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


  _renderItem({ item, index }) {
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

  renderHeader() {
    return (
      <View>
        <MoreCommonCell
          style={{ height: 40 }}
          title="我的订单"
          subtitle="全部订单"
          onPress={() => {
            alert('我的订单');
          }}
        />

        <View style={styles.menuStyle}>
          <MineMenuItem title='待付款' image={require('../../img/Mine/order_tab_need_pay@2x.png')}
            onPress={() => {
              alert('待付款');
            }}
          />
          <MineMenuItem title='待使用' image={require('../../img/Mine/order_tab_need_use@2x.png')}
            onPress={() => {
              alert('待使用');
            }}
          />
          <MineMenuItem title='待评价' image={require('../../img/Mine/order_tab_need_review@2x.png')}
            onPress={() => {
              alert('待评价');
            }}
          />
          <MineMenuItem title='退款/售后' image={require('../../img/Mine/order_tab_needoffer_aftersale@2x.png')}
            onPress={() => {
              alert('退款/售后');
            }}
          />
        </View>
        <Spacing />
        <MoreCommonCell
          style={{ height: 40 }}
          title="我的收藏"
          subtitle="查看全部"
          onPress={() => {
            alert('我的收藏');
          }}
        />
      </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
  menuStyle: {
    flexDirection: 'row',
  },
  footerTextStyle: {
    fontSize: 13,
    alignSelf: 'center',
  }
});