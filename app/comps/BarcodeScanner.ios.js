
import React, { Component } from 'react';
import Camera from 'react-native-camera';

class BarcodeScanner extends Component {
  render() {

    const {
      onBarCodeRead,
      children,
    } = this.props;

    return (
      <Camera
        // ref={(cam) => {
          // this.camera = cam;
        // }}
        onBarCodeRead={onBarCodeRead && onBarCodeRead}
        style={{flex:1}}
        aspect={Camera.constants.Aspect.fill}>
        {children}
      </Camera>
    );
  }
}

export default BarcodeScanner;
