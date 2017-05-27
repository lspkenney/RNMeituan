import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class PagerIndicator extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.renderIndicators()}
      </View>
    );
  }

  renderIndicators(){
    let indicatorViews = [];
    //&bull;
    for(let i = 0; i < this.props.indicatorCount; i++){
      indicatorViews.push(
        <Text key={i} style={[styles.text, this.props.indicatorStyle, {color: i == this.props.currentIndex ? this.props.activeColor : this.props.inActiveColor}]}>&bull;</Text>
      );
    }
    return indicatorViews;
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width: width,
    backgroundColor: 'white',
  },
  text:{
    fontSize: 30,
    color: 'gray',
    marginLeft: 3,
  }
});