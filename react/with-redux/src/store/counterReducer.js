export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// action creators
export function increment() {
  return { type: INCREMENT }
}

export function decrement() {
  return { type: DECREMENT }
}

const initialState = {
  count: 0,
};

export function counterReducer(state = initialState, action) {
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
