import { LOGIN_SUCCESS } from '../actions/accountAction';

const INITIAL_STATE = {
  user: null
}
const accountReducer = (state = INITIAL_STATE,action) => {
  switch(action.type){
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.payload.user
      }
    }
    default: {
      return state
    }
  } 
 
  
 
 
 
  if(action.type === LOGIN_SUCCESS){
    return {
      ...state,
      user: action.payload.user
    }
  }
  
  return state;
}

export default accountReducer;