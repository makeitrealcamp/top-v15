import axios from 'axios';

export const POSTS_LOADING = 'POSTS_LOADING';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_ERROR = 'POSTS_ERROR';

export function getPosts() {
  return async function (dispatch) {
    try {
      dispatch({ type: POSTS_LOADING, payload: true });
      const { data } = await axios({
        method: 'GET',
        baseURL: 'https://jsonplaceholder.typicode.com',
        url: '/posts',
      })
      dispatch({ type: POSTS_SUCCESS, payload: data })
    } catch(err) {
      dispatch({ type: POSTS_ERROR, payload: err })
    } finally {
      dispatch({ type: POSTS_LOADING, payload: false });
    }
  }
}

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export function postsReducer(state = initialState, action) {
  switch(action.type) {
    case POSTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
