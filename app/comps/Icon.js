import React, { Component } from 'react';

import {
  Image,
  TouchableOpacity,
} from 'react-native';

class Icon extends Component {

  _renderImage(){
    const {
      uri,
      style,
      tintColor,
      onPress,
    } = this.props;

    const noTouchableStyle = onPress ? {
      ...style,
      position: undefined,
      top: undefined,
      left: undefined,
      right: undefined,
      bottom: undefined,
    } : style;

    return (
      <Image
        source={{
          uri: uri,
        }}
        style={[{
          tintColor: tintColor || '#fff',
          width: 24,
          height: 24,
        },noTouchableStyle]}
      />
    );
  }

  render() {
    const {
      onPress,
      onPressIn,
      style,
      hitSlop,
    } = this.props;

    if(onPress){
      const isAbsolute = style && style.position === 'absolute';
      let touchableStyle = isAbsolute ? {
        position: style.position,
        left:style.left,
        top: style.top,
        right:style.right,
        bottom:style.bottom,
      } : undefined;

      return (
        <TouchableOpacity
          onPress={onPress}
          onPressIn={onPressIn}
          style={touchableStyle}
          hitSlop={hitSlop}
        >
          {this._renderImage()}
        </TouchableOpacity>
      );
    }

    return (
      this._renderImage()
    );
  }
}

export default Icon;
