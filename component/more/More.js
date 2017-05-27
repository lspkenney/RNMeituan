import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import {Spacing, MoreCommonCell} from '../widget/CustomeComponents'

export default class More extends Component {

  render() {
    return (
      <ScrollView 
        contentContainerStyle= {styles.container}
      >
        {this.renderCells()}
      </ScrollView>
    );
  }


componentDidMount(){

}

renderCells(){
  let cellDatas = this.getDataList();
  let allCells = [];
  let myKey = 0;
  allCells.push(<Spacing key={myKey}/>);
  myKey++;
  for(let i in cellDatas){
    let cellGroup = cellDatas[i];

    for(let j in cellGroup){
      let cell = cellGroup[j];
      allCells.push(
        <MoreCommonCell
          title = {cell.title}
          subtitle = {cell.subtitle}
          image = {cell.image}
          onPress = {
            () => {
              if(i == 0){
                this.props.navigation.navigate('RealmDemo');
              }else{
                alert(cell.title);
              }
              
            }
          }
          key={myKey}
        />
      );
      myKey++;
    }
    allCells.push(<Spacing key={myKey}/>);
    myKey++;
  }
  return allCells;
}

  getDataList() {
    return (
      [
        [
          { title: 'Realm数据库Demo', image: require('../../img/Mine/icon_mine_wallet@2x.png') }
        ],
        [
          { title: '我的钱包', subtitle: '办信用卡', image: require('../../img/Mine/icon_mine_wallet@2x.png') },
          { title: '余额', subtitle: '￥95872385', image: require('../../img/Mine/icon_mine_balance@2x.png') },
          { title: '抵用券', subtitle: '63', image: require('../../img/Mine/icon_mine_voucher@2x.png') },
          { title: '会员卡', subtitle: '2', image: require('../../img/Mine/icon_mine_membercard@2x.png') }
        ],
        [
          { title: '好友去哪', image: require('../../img/Mine/icon_mine_friends@2x.png') },
          { title: '我的评价', image: require('../../img/Mine/icon_mine_comment@2x.png') },
          { title: '我的收藏', image: require('../../img/Mine/icon_mine_collection@2x.png') },
          { title: '会员中心', subtitle: 'v15', image: require('../../img/Mine/icon_mine_membercenter@2x.png') },
          { title: '会员中心2', subtitle: 'v16', image: require('../../img/Mine/icon_mine_membercenter@2x.png') },
          { title: '会员中心3', subtitle: 'v17', image: require('../../img/Mine/icon_mine_membercenter@2x.png') },
          { title: '积分商城', subtitle: '好礼已上线', image: require('../../img/Mine/icon_mine_member@2x.png') }
        ],
        [
          { title: '客服中心', image: require('../../img/Mine/icon_mine_customerService@2x.png') },
          { title: '关于美团', subtitle: '我要合作', image: require('../../img/Mine/icon_mine_aboutmeituan@2x.png') }
        ]
      ]
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
  },
});

