
import React, { Component } from 'react';
import BarcodeScanner from 'react-native-barcodescanner';

import {
  View
} from 'react-native';

class BarcodeScannerView extends Component {
  render() {

    const {
      onBarCodeRead,
      children,
    } = this.props;

    return (
      <BarcodeScanner
        // onBarCodeRead={this.barcodeReceived}
        onBarCodeRead={onBarCodeRead && onBarCodeRead}
        style={{ flex: 1 }}
        torchMode={'off'}
        cameraType={'back'}
        showViewFinder={false}
      >
        {children}
      </BarcodeScanner>
    );
  }
}

export default BarcodeScannerView;
