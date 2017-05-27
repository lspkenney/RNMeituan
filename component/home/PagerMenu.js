import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import PagerMenuItem from './PagerMenuItem';
import PagerIndicator from './PagerIndicator';

const { width } = Dimensions.get('window');

export default class PagerMenu extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentPageIndex: 0,
    };
  }

  render() {
    return (
      <View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewStyle}
          onScroll={(e) => this._onScroll(e)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
        >
          <View style={styles.container}>{this.renderMenuItems()}</View>
        </ScrollView>

        <PagerIndicator
          style={{padding: 0}}
          indicatorCount={2}
          currentIndex={this.state.currentPageIndex}
          activeColor={"#06C1AE"}
          inActiveColor={"gray"}
        />
      </View>
    );
  }

  _onScroll(e) {
    let xOffset = e.nativeEvent.contentOffset.x;
    let pageIndex = Math.floor(xOffset / width);
    this.setState({
      currentPageIndex: pageIndex,
    })
  }

  renderMenuItems() {
    let datas = this.props.menuDatas;
    let allMenuItems = [];
    let pageCount = Math.ceil(datas.length / 10);//10个为一页
    let pagerViews = [];

    for (let i in datas) {
      let item = datas[i];
      allMenuItems.push(
        <PagerMenuItem
          onPress={() => this.props.onPagerMenuPress(item)}
          menuIcon={item.icon}
          menuName={item.title}
          key={i}
        />
      );
    }

    for(let i = 0; i < pageCount; i++){
      let group = allMenuItems.splice(0, 10);
      let pagerView = (
        <View style={styles.menuContainer} key={i}>
          {group}
        </View>
      );
      pagerViews.push(pagerView);
    }
    return pagerViews;
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  menuContainer: {
    flexDirection: 'row',
    width: width,
    flexWrap: 'wrap',
  },
  scrollViewStyle: {
    backgroundColor: 'white',
    paddingTop:5,
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