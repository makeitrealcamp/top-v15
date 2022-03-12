import axios from 'axios';
import { history } from '../utils/history';

export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';

const actionMap = {
  email: CHANGE_EMAIL,
  password: CHANGE_PASSWORD,
};

export function handleChange({ target: { name, value } }) {
  return function (dispatch) {
    dispatch({
      type: actionMap[name],
      payload: value,
    });
  }
}

export function signup(data) {
  return async function (dispatch) {
    try {
      const { data: { token } } = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/signup',
        headers: {
          'Content-Type': 'application/json',
        },
        data
      });

      localStorage.setItem('token', token);
      history.push('/');
    } catch (error) {
      console.dir(error);
    }
  }
}

export function signin(data) {
  return async function (dispatch) {
    try {
      const { data: { token }} = await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/signin',
        headers: {
          'Content-Type': 'application/json',
        },
        data
      });

      localStorage.setItem('token', token);
      history.push('/');
    } catch (error) {
      console.dir(error);
    }
  }
}

const initialState = {
  email: '',
  password: '',
};

export function usersReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    default:
      return state;
  }
}
