import { useState } from 'react';
import './App.scss';

// el estado son los datos internos del componente
function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count => count + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={handleIncrement}>Increment</button>
    </div>
  )
}

function MultipleCounters() {
  const counter = [<Counter />, <Counter />, <Counter />, <p>counters</p>]

  return (
    <div>
      <h1>Counters</h1>
      {counter}
    </div>
  )
}

// los props son la forma principal en que podemos enviar información desde un componente padre a un componente hijo
function Greeting({ name, age, working, className }) {
  return (
    <div>
      <p className={className}>hola {name}</p>
      {working ? <p>mi edad es {age}</p> : null}
    </div>
  )
}

// camelCase
// PascalCase
// snake_case
// kebab-case
function App() {
  // JSX - JavaScript and XML
  // 1. todas las etiquetas se deben cerrar
  // 2. no retornar elementos adjacents
  // 3. atributos que sean iguales a palabras reservadas de JS deben reemplazados
  //    class -> className
  //    for -> htmlFor
  return (
    <div>
      <MultipleCounters />
      <h1>Mi título</h1>
      <Greeting className="blue" name="María" />
      <Greeting name="Juan" />
      <Greeting name="Martin" />
      <Greeting name="Ana" age={24} working={true} />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
