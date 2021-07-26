import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  RESET_COUNTER
} from './types'

export const increaseCounterByOne = () => (
  {
    type: INCREASE_COUNTER,
    payload: 1
  }
);

export const decreaseCounterByOne = () => (
  {
    type: DECREASE_COUNTER,
    payload: 1
  }
);

export const resetCounter = () => (
  {
    type: RESET_COUNTER,
    payload: 1
  }
);
