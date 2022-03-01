import { useCounter } from '../../context/counter';

export function Counter() {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}
