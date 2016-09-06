
const initialState = {
  viewReady: false,
  barcodeScanned: false,
  products: [],

  // DEV USE
  // viewReady: true,
  // barcodeScanned: true,


};

export default function moduleName(state=initialState, action = {}){

  if(action.type === 'SCANNER_SET_STATE'){
    return {
      ...state,
      ...action.props,
    };
  }

  if(action.type === 'SCANNER_RESET_TO_INITIAL_STATE'){
    return initialState;
  }

  return state;
}
