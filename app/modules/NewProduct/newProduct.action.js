
// import actionTypes from './newProduct.actionTypes.js';

import {
  Alert,
} from 'react-native';

import { addProductRequest } from './newProduct.network'
export function addProduct(params) {

  const {
    onNavigate,
  } = params;

  return async (dispatch, getState) => {

    const state = getState().newProduct;
    const {
      productTitle,
      barcode
    } = state;

    try {
      await addProductRequest({
        body: {
          productTitle,
          barcode,
        }
      });

      Alert.alert(
        'Product Added',
        'The new barocde has been added, now waiting for review',
        [{text: 'OK', onPress: () => {
          onNavigate({
            type: 'pop'
          });
        }}]
      );

    } catch (error){
      WARN(error);
    }

  };
}
