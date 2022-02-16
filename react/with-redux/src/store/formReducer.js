export const CHANGE_EMAIL = 'CHANGE_EMAIL';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_INPUT = 'CHANGE_INPUT'

// action creators
export function changeInput(name, value) {
  return {
    type: CHANGE_INPUT,
    payload: {
      name,
      value,
    }
  }
}

const initialState = {
  email: '',
  password: '',
};

export function formReducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
}
