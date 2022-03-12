import configureStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import {
  getTasks,
  createTask,
  handleChange,
  GET_TASKS,
  CREATE_TASK,
  CHANGE_NAME
} from './actions'
import { tasksReducer, initialState } from '.';

const middlewares = [thunk]
const mockStore = configureStore(middlewares);
const mockTasks = [
  { _id: '32847uakesojfkalsdjg', name: 'task 1', done: false },
  { _id: '3874klsedjfglaghdf32', name: 'task 2', done: true },
  { _id: '83754sdhjag;h4kasljt', name: 'task 3', done: false },
];

describe('tasksReducer', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it(
    'should get tasks and dispatch GET_TASKS action with response payload',
    async () => {
      const store = mockStore();

      getTasks()(store.dispatch);

      await moxios.wait(jest.fn);
      const req = moxios.requests.mostRecent();
      await req.respondWith({
        status: 200,
        response: mockTasks
      });

      const actions = store.getActions()

      expect(actions[0].type).toBe(GET_TASKS);
      expect(actions[0].payload).toHaveLength(mockTasks.length);
      expect(actions[0].payload).toMatchObject(mockTasks);
    }
  );

  it(
    'should create task and dispatch CREATE_TASK action and receive message in payload',
    async () => {
      const { dispatch, getActions } = mockStore();

      createTask('task 4')(dispatch);

      await moxios.wait(jest.fn);
      const req = moxios.requests.mostRecent();
      await req.respondWith({
        status: 200,
      });

      const [ action ] = getActions();

      expect(action.type).toBe(CREATE_TASK);
      expect(action.payload).toMatch(/task created successfully/i);
    }
  )

  it(
    'should change name and dispath CHANGE_NAME action with target value',
    () => {
      const { dispatch, getActions } = mockStore();

      const value = 'task 5';

      handleChange({ target: { value } })(dispatch);

      const [ action ] = getActions();

      expect(action.type).toBe(CHANGE_NAME);
      expect(action.payload).toMatch(value);
    }
  );

 it(
  'should return initialState by default',
  () => {
    const state = tasksReducer(
      undefined,
      { type: 'DEFAULT' },
    );

    expect(state).toMatchObject(initialState);
  }
 );

 it(
   'should change task name',
   () => {
     const state = tasksReducer(
       undefined,
       { type: CHANGE_NAME, payload: 'task 5' }
     );

     expect(state.name).toBe('task 5');
     expect(state).toMatchObject({ ...initialState, name: 'task 5' })
   }
 )
});
