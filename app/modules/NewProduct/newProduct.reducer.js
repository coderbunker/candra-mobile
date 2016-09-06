
const initialState = {
  barcode: '',
  productTitle: '',
};

export default function moduleName(state=initialState, action = {}){

  if(action.type === 'NEW_PRODUCT_SET_STATE'){
    WARN('222222222')
    return {
      ...state,
      ...action.props,
    };
  }

  if(action.type === 'NEW_PRODUCT_RESET_TO_INITIAL_STATE'){
    return initialState;
  }

  return initialState;
}
