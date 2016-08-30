
import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Platform
} from 'react-native';

const isAndroid = Platform.OS === 'android';

import Icon from './Icon';

class NavigationBar extends Component {
  render() {

    const {
      title,
      onPressLeft,
      onPressRight,
    } = this.props;

    return (
      <View style={{paddingTop: isAndroid ? 0 : 20,backgroundColor:'#eee',flexDirection:'row'}}>
        <TouchableOpacity
          style={{
            height:48,
            backgroundColor:'#aaa',
            flexDirection:'row'
          }}
          onPress={onPressLeft && onPressLeft}
        >
          <Icon style={{width:48,height:48}}/>
        </TouchableOpacity>

        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center'}}>
          <Text>{title}</Text>
        </View>

        <TouchableOpacity
          style={{height:48,backgroundColor:'#aaa',flexDirection:'row'}}
          onPress={onPressRight && onPressRight}
        >
          <Icon style={{width:48,height:48}}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NavigationBar;
