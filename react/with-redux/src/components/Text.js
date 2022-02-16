import { useSelector } from 'react-redux';

export function Text() {
  const email = useSelector(state => state.formReducer.email);

  return <p>{email}</p>
}
