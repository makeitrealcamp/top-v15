import { useSelector } from 'react-redux';

export function Counter() {
  const count = useSelector(state => state.counterReducer.count);
  return <p>{count}</p>
}
