import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class ShopListHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderItems()}
      </View>
    );
  }

  renderItems() {
    let types = this.props.types;
    let typeViews = [];
    for (let index in types) {
      typeViews.push(
        <TouchableOpacity
          onPress={() => this.props.onSelected(index)}
          style={[styles.outView, {backgroundColor: index == this.props.selectedIndex ? '#FE566D' : 'white'}]}
          key={index}
        >
          <Text style={[styles.itemStyle, { color: index == this.props.selectedIndex ? 'white' : '#555555' }]}>{types[index]}</Text>
        </TouchableOpacity>
      );
    }
    return typeViews;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  outView:{
    margin:5,
    borderRadius: 18,
    height: 30,
    width: width / 4 - 10,
    alignItems:'center',
    justifyContent:'center'
  },
  itemStyle: {
    fontSize: 13,
  },
});