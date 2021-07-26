import INITIAL_STATE from "./state";
import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
} from './types'

const reducer =  (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INCREASE_COUNTER: 
      return state + action.payload;

    case DECREASE_COUNTER:
      return state - action.payload;
    
    case RESET_COUNTER:
      return INITIAL_STATE;

    default: 
      return state;
  }
}

export default reducer;
