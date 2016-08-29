
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scannerActions from './scanner.action';

import Camera from 'react-native-camera';

class ScannerContainer extends Component {

  _takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data)
        Alert.alert(
          'Alert Title',
          'Picture Taken',
          []
        )
      })
      .catch(err => console.error(err));
  }

  _onBarCodeRead(){
    Alert.alert(
      'Alert Title',
      'Barcode Detected',
      []
    )
  }

  _pop(){
    this.props.onNavigate({
      type: 'pop',
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          onBarCodeRead={this._onBarCodeRead.bind(this)}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this._takePicture.bind(this)}>[CAPTURE]</Text>
          <Text style={styles.capture} onPress={this._pop.bind(this)}>[BACK]</Text>
        </Camera>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default connect(state => ({
    state: state.scanner
  }),
  (dispatch) => ({
    actions: bindActionCreators(scannerActions, dispatch)
  })
)(ScannerContainer);
