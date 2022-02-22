import axios from 'axios';

export const GROCERIES_LOADING = 'GET_GROCERIES_LOADING';
export const GROCERIES_FAIL = 'GET_GROCERIES_FAIL';
export const GET_GROCERIES_SUCCESS = 'GET_GROCERIES_SUCCESS';
export const POST_GROCERIES_SUCCESS = 'POST_GROCERIES_SUCCESS';
export const GET_GROCERIES_DETAIL_SUCCESS = 'GET_GROCERIES_DETAIL_SUCCESS';
export const CHANGE_GROCERIES_INPUT = 'CHANGE_GROCERIES_INPUT';
export const GROCERIES_RESET = 'GROCERIES_RESET';

export function getGroceries(navigate) {
  return async function (dispatch) {
    try {
      dispatch({ type: GROCERIES_LOADING });

      const token = localStorage.getItem('token');
      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8000',
        url: '/groceries',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      dispatch({ type: GET_GROCERIES_SUCCESS, payload: data.groceries });
    } catch(e) {
      if(e.response.status === 401) {
        navigate('/login')
      }
      dispatch({ type: GROCERIES_FAIL });
    }
  }
}

export function changeGroceriesInput(name, value) {
  return {
    type: CHANGE_GROCERIES_INPUT,
    payload: { name, value },
  };
}

export function createGroceries(name, price, available, navigate) {
  return async function (dispatch) {
    try {
      dispatch({ type: GROCERIES_LOADING });

      const token = localStorage.getItem('token');
      await axios({
        method: 'POST',
        baseURL: 'http://localhost:8000',
        url: '/groceries',
        data: { name, price, available },
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      dispatch({ type: POST_GROCERIES_SUCCESS })
    } catch(e) {
      if(e.response.status === 401) {
        navigate('/login')
      }
      dispatch({ type: GROCERIES_FAIL });
    }
  }
}

export function getGroceryDetails(id, navigate) {
  return async function (dispatch) {
    try {
      dispatch({ type: GROCERIES_LOADING });

      const token = localStorage.getItem('token');
      const { data } = await axios({
        method: 'GET',
        baseURL: 'http://localhost:8000',
        url: `/groceries/${id}`,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      dispatch({ type: GET_GROCERIES_DETAIL_SUCCESS, payload: data.grocery });
    } catch(e) {
      if(e.response.status === 401) {
        navigate('/login')
      }
      dispatch({ type: GROCERIES_FAIL });
    }
  }
}

const initialState = {
  loading: false,
  error: null,
  groceries: [],
  name: '',
  price: 0,
  available: false,
  message: '',
}

export function groceriesReducer(state = initialState, { type, payload }) {
  switch(type) {
    case GROCERIES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GROCERIES_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_GROCERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        groceries: payload,
      }
    case GET_GROCERIES_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        name: payload.name,
      };
    case POST_GROCERIES_SUCCESS:
      return {
        ...state,
        loading: false,
        message: 'Grocery created',
        name: '',
        price: 0,
        available: false,
      };
    case CHANGE_GROCERIES_INPUT:
      return {
        ...state,
        [payload.name]: payload.value,
      }
    case GROCERIES_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
