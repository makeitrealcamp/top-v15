import axios from 'axios';
import { history } from '../App';

export const CHANGE_USER_INPUT = 'CHANGE_USER_INPUT';
export const CREATE_USER_LOADING = 'CREATE_USER_LOADING';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAIL = 'CREATE_USER_FAIL';

export function changeUserInput(name, value) {
  return {
    type: CHANGE_USER_INPUT,
    payload: { name, value },
  };
}

/* export function loginUser(email, password) {
  return async function (dispatch) {
    try {
      dispatch({ type: LOGIN_USER_LOADING });

      const { data } = await axios({
        method: 'POST',
        baseURL: 'http://localhost:8000',
        url: '/users/signin',
        data: { email, password },
      });

      localStorage.setItem('token', data.token);

      dispatch({ type: LOGIN_USER_SUCCESS });
    } catch(e) {
    console.dir(e)
      dispatch({ type: LOGIN_USER_FAIL })
    }
  }
} */

export function createUser(email, password) {
  return async function (dispatch) {
    try {
      dispatch({ type: CREATE_USER_LOADING });

      const { data } = await axios({
        method: 'POST',
        baseURL: 'http://localhost:8000',
        url: '/users/signup',
        data: { email, password },
      });

      localStorage.setItem('token', data.token);
      dispatch({ type: CREATE_USER_SUCCESS });

      history.push('/');
    } catch(e) {
      dispatch({ type: CREATE_USER_FAIL, payload: e.response.data.error.message })
    }
  }
}

const initialState = {
  email: '',
  password: '',
  loading: false,
  error: null,
};

export function userReducer(state = initialState, { type, payload }) {
  switch(type) {
    case CHANGE_USER_INPUT:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case CREATE_USER_LOADING:
      return {
        ...state,
        loading: true,
      }
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      }
    default:
      return state;
  }
}
