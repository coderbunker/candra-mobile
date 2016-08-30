
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as scannerActions from './scanner.action';
import { Comps } from '../../.';
import Camera from 'react-native-camera';

const {
  NavigationBar,
  Button,
} = Comps;

class ScannerContainer extends Component {

  constructor(props) {
    super(props);

    this.barcodeDetected = false;

    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(function(){
      dispatch({
        type: 'SCANNER_SET_STATE',
        props: {
          viewReady: true
        }
      });
    },500);
  }

  componentWillUnmount(){
    this.props.dispatch({
      type: 'SCANNER_RESET_TO_INITIAL_STATE'
    });
  }

  _takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data)
        Alert.alert(
          'Alert Title',
          'Picture Taken',
          []
        );
      })
      .catch(err => console.error(err));

    this.props.dispatch({
      type: 'SCANNER_SET_STATE',
      props: {
        barcodeScanned: true
      }
    });
  }

  _onBarCodeRead(){
    if(this.barcodeDetected){ return; }
    this.barcodeDetected = true;
    Alert.alert(
      'Alert Title',
      'Barcode Detected',
      []
    );
  }

  _pop(){
    this.props.onNavigate({
      type: 'pop',
    });
  }

  _renderBlackScreen(){
    return (
      <View style={{flex:1,backgroundColor:'black'}}/>
    );
  }

  _renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        onBarCodeRead={this._onBarCodeRead.bind(this)}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}>
        {/*<Text style={styles.capture} onPress={this._takePicture.bind(this)}>[CAPTURE]</Text>
        <Text style={styles.capture} onPress={this._pop.bind(this)}>[BACK]</Text>*/}
      </Camera>
    );
  }

  _renderPayment(){
    return (
      <View style={{flex:1,alignItems:'center'}}>
      <Text>{'Product Title, Price'}</Text>
        <View style={{backgroundColor:'#ccc',marginTop:20,width:220,height:220}}>
          <Text>{'Product Pictrue'}</Text>
        </View>
        <Button
          style={{marginTop:20}}
          text={'PAY'}
          onPress={()=>{
            Alert.alert(
              'Purchase success',
              'Your payment has been processed. thanks for buying',
              [{text: 'OK', onPress: () => {
                this._pop.call(this);
              }}]
            );

          }}
        />
      </View>
    );
  }

  render(){
    const { barcodeScanned, viewReady } = this.props.state;

    var content;

    if(!viewReady){
      content = this._renderBlackScreen.call(this);
    } else if(barcodeScanned){
      content = this._renderPayment.call(this);
    } else {
      content = this._renderCamera.call(this);
    }

    return (
      <View style={styles.container}>
        <NavigationBar
          onPressLeft={this._pop.bind(this)}
          title={'Scanner'}
          onPressRight={()=>{
            this.props.dispatch({
              type: 'SCANNER_SET_STATE',
              props: {
                barcodeScanned: true
              }
            });
          }}
        />
        {content}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
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
    actions: bindActionCreators(scannerActions, dispatch),
    dispatch
  })
)(ScannerContainer);
