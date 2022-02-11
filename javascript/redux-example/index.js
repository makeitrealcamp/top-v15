const { createStore } = require('redux');

const initialState = {
  count: 0,
  email: '',
  password: '',
  posts: [],
  user: null,
};

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const CHANGE_EMAIL = 'CHANGE_EMAIL'

function reducer(state, action) {
  // always has to return an object
  console.log('dispatching action type: ', action.type)
  switch(action.type) {
    case INCREMENT:
      console.log('returning new state')
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      console.log('returning new state')
      return {
        ...state,
        count: state.count - 1,
      };
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload,
        password: action.payload,
      }
    default:
      return state;
  }

  // if(action.type === 'increment') {
  //   return obj1
  // } else if (action.type === 'decrement') {
  //   return obj2
  // } else {
  //   return state;
  // }
}

const store = createStore(reducer, initialState)

store.subscribe(() => {
  // Update UI
  console.log('receiving new state')
  console.log(store.getState());
});

function handleIncrement() {
  console.log('user event click')
  store.dispatch({ type: INCREMENT });
}

function handleDecrement() {
  store.dispatch({ type: DECREMENT });
}

// <button onClick={handleIncrement}>Increment count</button>
handleIncrement(); // User click
handleIncrement(); // User click
handleIncrement(); // User click
handleIncrement(); // User click

// <button onClick={handleDecrement}>Decrement count</button>
handleDecrement(); // User click
handleDecrement(); // User click

function handleChange(e) {
  store.dispatch({ type: CHANGE_EMAIL, payload: e.target.value });
}
// <input type="text" name="email" onChange={handleChange} value={store.email} />
handleChange({ target: { value: 't' } }) // User change
handleChange({ target: { value: 'te' } }) // User Change
handleChange({ target: { value: 'tes' } }) // User change
handleChange({ target: { value: 'test' } }) // User change
handleChange({ target: { value: 'test@' } }) // User change
