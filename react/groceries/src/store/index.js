import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { userReducer } from './userReducer';
import { groceriesReducer } from './groceriesReducer';

const middlewares = applyMiddleware(logger, thunk);
const rootReducer = combineReducers({
  userReducer,
  groceriesReducer,
});

export const store = createStore(rootReducer, middlewares);
