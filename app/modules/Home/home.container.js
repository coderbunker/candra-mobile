
import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from './home.action';
import { Comps } from '../../.';

const {
  NavigationBar,
  Button,
} = Comps;

class HomeContainer extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#fff'}}>
        <NavigationBar
          title={'Agora Space'}
        />
        <View style={{flex:1,alignItems:'center',justifyContent:'center',}}>
          <Button
            onPress={() => {
              this.props.onNavigate({
                type:'push',
                key: 'Scanner'
              });
            }}
            text={'OPEN SCANNER'}
          />
        </View>
      </View>
    );
  }
}

export default connect(state => ({
    state: state.home
  }),
  (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
  })
)(HomeContainer);
