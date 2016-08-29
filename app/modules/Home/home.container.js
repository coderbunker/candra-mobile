
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as homeActions from './home.action';

class HomeContainer extends Component {
  render() {
    return (
      <View style={{marginTop:20}}>
        <Text>{'Home'}</Text>
        <TouchableOpacity onPress={() => {
          this.props.onNavigate({
            type: 'push',
            key: 'Scanner'
          })
        }}>
          <Text>{'Push'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.props.onNavigate({
            type: 'pop',
          })
        }}>
          <Text>{'Pop'}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({

});

export default connect(state => ({
    state: state.home
  }),
  (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
  })
)(HomeContainer);
