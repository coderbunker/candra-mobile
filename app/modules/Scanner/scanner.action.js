
import _ from 'lodash';

import {
  Alert,
} from 'react-native';

import { getProducts } from './scanner.network';

export function setupScanner() {
  return async (dispatch, getState) => {

    try {
      const result = await getProducts();
      await new Promise((resolve)=>{
        setTimeout(resolve,400);
      });

      dispatch({
        type: 'SCANNER_SET_STATE',
        props: {
          viewReady: true,
          products: result.data,
        }
      });
    } catch (error){
      return WARN(error);
    }

  };
}

export function onBarcodeScanned(params) {

  const {
    onNavigate,
    barcode,
  } = params;

  return (dispatch, getState) => {
    const {
      products
    } = getState().scanner;

    const product = _.find(products, { barcode: barcode+'' });
    if(product){
      return Alert.alert(
        product.name,
        'price: ' + product.price,
        [{
          text: 'Pay',
          onPress: () =>{
            Alert.alert(
              'Payment Success',
              'You paid ' + product.price,
              [{
                onPress: () =>{
                  onNavigate({
                    type: 'pop',
                  });
                }
              }]
            );
          }
        }, {
          text: 'Cancel',
          onPress: () =>{

          }
        }]
      );
    }

    dispatch({
      type: 'SCANNER_RESET_TO_INITIAL_STATE'
    });

    // werid bug when putting this to componentWillUnmount
    dispatch({
      type: 'NEW_PRODUCT_SET_STATE',
      props: {
        barcode,
      }
    });


    onNavigate({
      type: 'replace',
      key: 'NewProduct',
    });

  };
}



