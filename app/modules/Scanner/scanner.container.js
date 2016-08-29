
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scannerActions from './scanner.action';

class ScannerContainer extends Component {
  render(){
    return (
      <View style={{marginTop:20}}>
        <Text>{'Scanner'}</Text>
        <TouchableOpacity onPress={() => {
          this.props.onNavigate({
            type: 'pop',
          })
        }}>
          <Text>{'Pop'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(state => ({
    state: state.scanner
  }),
  (dispatch) => ({
    actions: bindActionCreators(scannerActions, dispatch)
  })
)(ScannerContainer);
