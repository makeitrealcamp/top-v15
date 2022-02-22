import { useDispatch, useSelector } from 'react-redux';
import { changeUserInput } from '../store/userReducer';

export function UserForm({ handleSubmit, buttonText }) {
  const dispatch = useDispatch();

  const { email, password, loading, error } = useSelector(({
    userReducer: {
      email,
      password,
      loading,
      error,
    }
  }) => ({
    email,
    password,
    loading,
    error,
  }));

  function handleChange({ target: { name, value } }) {
    dispatch(changeUserInput(name, value));
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(email, password);
    }}>
      {error && <p>{error}</p>}
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        value={password}
      />
      <button disabled={loading}>{loading ? 'Loading' : buttonText}</button>
    </form>
  )
}
