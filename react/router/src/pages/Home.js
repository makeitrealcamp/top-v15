import Counter from '../components/Counter';

// page localhost:3000/
export function Home({ name }) {
  return (
    <>
      <h1>Hola {name}</h1>
      <Counter />
    </>
  )
}
