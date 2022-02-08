import { createContext, useState } from 'react'

export const CounterContext = createContext()

// Provider
// Consumer

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{
      count,
      setCount,
    }}>
      {children}
    </CounterContext.Provider>
  )
}
