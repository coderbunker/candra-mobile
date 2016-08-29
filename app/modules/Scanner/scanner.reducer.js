
const initialState = {
  //
}

export default function moduleName(state=initialState, action = {}){

  if(action.type === 'SOME_ACTION'){
    return {
      ...state,
      trains: action.stuff,
    }
  }

  return state;
}
