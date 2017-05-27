import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

import DiscountMenuItem from './DiscountMenuItem';


const { width } = Dimensions.get('window');

export default class DiscountMenu extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor:'white', flexDirection:'row', width: width, flexWrap:'wrap'}}>
        {this.renderDiscountViews()}
      </View>
    );
  }

  renderDiscountViews(){
    let datas = this.props.datas;
    let itemViews = [];
    for(let i in datas){
      let item = datas[i];
      itemViews.push(
        <DiscountMenuItem
          onPress = {() => this.props.onClickDiscountItem(item)}
          title={item.maintitle}
          subTitle={item.deputytitle}
          icon={{uri: item.imageurl.replace('w.h', '120.0')}}
          titleColor={item.typeface_color}
          subTitleColor={item.deputy_typeface_color}
          key={i}
        />
      );
    }
    return itemViews;
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