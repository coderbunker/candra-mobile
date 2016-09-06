
import React, { Component } from 'react';

import {
  View,
  Text,
  Alert,
} from 'react-native';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as paymentActions from './payment.action';

import { Comps } from '../../.';

const {
  Button,
  NavigationBar,
} = Comps;

class PaymentContainer extends Component {

  componentWillUnmount(){
    this.props.dispatch({
      type: 'PAYMENT_RESET_TO_INITIAL_STATE'
    });
  }

  render() {
    const { onNavigate } = this.props;
    return (
      <View style={{flex:1,alignItems:'center'}}>
        <NavigationBar
          onPressLeft={onNavigate.bind(null, {type:'pop'})}
          title={'Payment'}
        />
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
}

export default connect(state => ({
    state: state.payment
  }),
  (dispatch) => ({
    actions: bindActionCreators(paymentActions, dispatch)
  })
)(PaymentContainer);
