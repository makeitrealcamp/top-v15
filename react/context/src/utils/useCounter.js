import { useContext } from 'react'
import { CounterContext } from '../context/counter'

export function useCounter() {
  return useContext(CounterContext)
}
