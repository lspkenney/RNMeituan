import React, { Component } from 'react';
import {
  Image,
} from 'react-native';

export default class TabBarItem extends Component {
  render() {
    let selectedImage = this.props.focused ? this.props.selectedImage : this.props.normalImage;
    return (
      <Image
        source={selectedImage}
        style={{tintColor: this.props.tintColor,width: 25, height: 25}}
      ></Image>
    );
  }
}