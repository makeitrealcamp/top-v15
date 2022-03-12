import {
  GET_TASKS,
  CREATE_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  CHANGE_NAME,
} from './actions'

export const initialState = {
  tasks: [],
  name: '',
  message: '',
};

export function tasksReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: payload,
      };
    case CREATE_TASK:
      return {
        ...state,
        name: '',
        message: payload,
      };
    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          return task._id === payload._id ? payload : task
        }),
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(({ _id }) => _id !== payload),
      };
    case CHANGE_NAME:
      return {
        ...state,
        name: payload,
      };
    default:
      return state;
  }
}
