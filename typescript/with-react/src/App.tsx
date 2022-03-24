import { MouseEvent, ChangeEvent } from 'react';
import { useState } from 'react';
import './App.css';

interface IGreetProps {
  name?: string;
}

// type GreetProps = {
//   name: string,
// }

function Greet({ name = 'María' }: IGreetProps) {
  return <h1>hola {name}</h1>
}

// const Greet = ({ name }: IGreetProps)

// const Greet: FC<IGreetProps> = ({ name }) => (
//   <h1>hola { name }</h1>
// )

// class Greet extends React.Component<IState, IProps>

function Counter() {
  const [count, setCount] = useState<number>(1);

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    console.log(e);
    setCount(prevCount => prevCount + 1)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      {count}
    </button>
  )
}

function Form() {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setText(e.target.value);

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={text}
     />
     <textarea
       onChange={handleChange}
       value={text}
     />
    </div>
  )
}

function App() {
  return (
    <>
      <Greet />
      <Counter />
      <Form />
    </>
  );
}

export default App;
