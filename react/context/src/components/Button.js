// import { useContext } from 'react'
// import { CounterContext } from '../context/counter'
import { useCounter } from '../utils/useCounter'

export function Button() {
  // const { setCount } = useContext(CounterContext);

  const { setCount } = useCounter();

  return (
    <div>
      <button
        type="button"
        onClick={() => setCount(prevCount => prevCount + 1)}
      >
        Increment
      </button>
    </div>
  )
}

