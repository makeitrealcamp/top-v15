import { createStore } from 'redux';

const initialState = {
  count: 0,
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state;
  }
}

export const store = createStore(reducer);

