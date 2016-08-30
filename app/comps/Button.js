
import React, { Component } from 'react';

import {
  Text
} from 'react-native';

import {
  MKButton,
  MKColor,
} from 'react-native-material-kit';

class Button extends Component {
  render() {

    const { text, onPress, style } = this.props;

    return (
      <MKButton
        backgroundColor={MKColor.Teal}
        shadowRadius={2}
        shadowOffset={{width:0, height:2}}
        shadowOpacity={.7}
        shadowColor="black"
        onPress={onPress && onPress}
        style={{width:200,height:48,alignItems:'center',justifyContent:'center', ...style}}
        >
        <Text pointerEvents="none"
              style={{color: 'white', fontWeight: 'bold',}}>
          {text}
        </Text>
      </MKButton>
    );
  }
}

export default Button;
