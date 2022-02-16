import { useDispatch, useSelector } from 'react-redux';
import { /* CHANGE_EMAIL, CHANGE_PASSWORD, */ /* CHANGE_INPUT */ changeInput } from '../store/formReducer';

export function Form() {
  const dispatch = useDispatch();
  const email = useSelector(state => state.formReducer.email);
  const password = useSelector(state => state.counterReducer.password);

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="email"
        /* onChange={e => dispatch({ type: CHANGE_EMAIL, payload: e.target.value })} */
        /* onChange={e => dispatch({ type: CHANGE_INPUT, payload: { name: e.target.name, value: e.target.value } })} */
        onChange={e => dispatch(changeInput(e.target.name, e.target.value))}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        id="password"
        name="password"
        /* onChange={e => dispatch({ type: CHANGE_PASSWORD, payload: e.target.value })} */
        /* onChange={e => dispatch({ type: CHANGE_INPUT, payload: { name: e.target.name, value: e.target.value } })} */
        onChange={e => dispatch(changeInput(e.target.name, e.target.value))}
        value={password}
      />
    </form>
  )
}
