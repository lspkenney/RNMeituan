import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import Api from '../api/Api';
import { Spacing, CommonItem } from '../widget/CustomeComponents';
import PagerMenu from './PagerMenu';
import DiscountMenu from './DiscountMenu'

const { width } = Dimensions.get('window');
const ITEM_HEIGHT = width / 4 + 20;


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      isRefreshing: false,
      isNoMoreData: false,
      discountData:[],
    }
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
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
    );
  }

  componentDidMount() {
    this.requestDiscountDataByAsync();
    this.refs.flatList.props.onRefresh();
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
        <PagerMenu
          menuDatas={Api.menuInfo}
          onPagerMenuPress={(menu) => { alert(menu.title) }}></PagerMenu>
        <Spacing />

        <DiscountMenu
          datas={this.state.discountData}
          onClickDiscountItem={(menu) =>{ alert(menu.maintitle)}}
        />

        <Spacing />
        <View style={styles.likeViewStyle}>
          <Text style={styles.likeTextStyle}>猜你喜欢</Text>
        </View>
      </View>
    );
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
      datas.sort(function () {
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

  async requestDiscountDataByAsync() {
    try {
      // 注意这里的await语句，其所在的函数必须有async关键字声明
      let response = await fetch(Api.discount);
      let responseJson = await response.json();
      let datas = responseJson.data;


      // datas.map((item, index) => {
      //   item.key = index;
      //   item.price = item.price + '元';
      //   item.squareimgurl = item.squareimgurl.replace('w.h', '160.0')
      //   return item;
      // });
      this.setState({
        discountData: datas,
      })
    } catch (error) {
      alert("requestData " + error);
    }
  }

}

const styles = StyleSheet.create({
  likeViewStyle: { 
    backgroundColor: 'white', 
    padding: 10, 
    borderBottomColor: '#f2f2f2', 
    borderBottomWidth: 0.5, 
  },
  likeTextStyle:{
    fontSize: 13, 
    fontWeight: 'bold' 
  },
});