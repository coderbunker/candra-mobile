
import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as newProductActions from './newProduct.action';

import { Comps } from '../../.';

const {
  Button,
  NavigationBar,
} = Comps;

import {
  MKColor,
  MKTextField,
} from 'react-native-material-kit';

class NewProductContainer extends Component {

  // componentWillUnmount(){
  //   this.props.dispatch({
  //     type: 'NEW_PRODUCT_RESET_TO_INITIAL_STATE'
  //   });
  // }

  render(){
    const { onNavigate, dispatch } = this.props;
    const { addProduct } = this.props.actions;

    return (
      <View style={{flex:1,alignItems:'center'}}>
        <NavigationBar
          onPressLeft={onNavigate.bind(null, {type:'pop'})}
          title={'Urecognized Product'}
        />
        <Text>{'This product has not been yet added, please insert the name, we will review it'}</Text>
        <MKTextField
          tintColor={MKColor.Lime}
          textInputStyle={{color: MKColor.Orange}}
          placeholder={'Product Title'}
          style={{
            width:200,
            height:40,
          }}
          onChangeText={(text)=>{
            dispatch({
              type: 'NEW_PRODUCT_SET_STATE',
              props: {
                productTitle: text,
              }
            });
          }}
        />
        <Button
          style={{marginTop:20}}
          text={'ADD'}
          onPress={()=>{
            addProduct({onNavigate});
            //
            //
            //
          }}
        />
      </View>
    );
  }
}

export default connect(state => ({
    state: state.newProduct
  }),
  (dispatch) => ({
    actions: bindActionCreators(newProductActions, dispatch),
    dispatch,
  })
)(NewProductContainer);
