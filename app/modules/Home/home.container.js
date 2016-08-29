
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
      <View>
        <Text>{'Hello'}</Text>
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
