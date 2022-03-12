import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { tasksReducer } from './tasksReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
  tasksReducer,
  usersReducer,
});

const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
