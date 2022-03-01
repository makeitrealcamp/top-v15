import { createContext, useContext, useState } from 'react';

const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <CounterContext.Provider value={{ count, increment }}>
     {children}
    </CounterContext.Provider>
  )
}

export function useCounter() {
  return useContext(CounterContext);
}
