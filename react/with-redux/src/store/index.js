import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { counterReducer } from './counterReducer';
import { formReducer } from './formReducer';
import { postsReducer } from './postsReducer';

// currying
// function logger(store) {
//   return function (next) {
//     return function (action) {
//       const currState = store.getState();
//       const result = next(action)
//       const nextState = store.getState();

//       console.log({
//         'Current state': currState,
//         action,
//         'Next state': nextState
//       });

//       return result;
//     }
//   }
// }

const rootReducer = combineReducers({ counterReducer, formReducer, postsReducer });
const middlewares = applyMiddleware(logger, thunk);

export const store = createStore(rootReducer, middlewares);

// const initialState = {
//   count: 0,
//   email: '',
//   password: '',
// };

/* export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_INPUT = 'CHANGE_INPUT' */

/* function reducer(state = initialState, action) {
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
    case CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    // case CHANGE_EMAIL:
    //   return {
    //     ...state,
    //     email: action.payload,
    //   }
    // case CHANGE_PASSWORD:
    //   return {
    //     ...state,
    //     password: action.payload,
    //   }
    default:
      return state;
  }
} */
