import { useSelector } from 'react-redux';

export function Counter() {
  const count = useSelector(state => state.count);
  return <p>{count}</p>
}
