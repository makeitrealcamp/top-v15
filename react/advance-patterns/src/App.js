import { useState, useEffect } from 'react';
import './App.css';
import { Counter } from './components/ClassComponent';
import Home from './components/HighOrderComponent';
import { InputChange } from './components/RenderProps';
import { Duplicate } from './components/Hooks';

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3000)
  }, [])

  return (
    <div>
      {show && <Duplicate />}
      <Counter />
      <Home name="Maria"/>
      <InputChange name="input">
        {(text, change) => {
          return (
            <input
              type="text"
              onChange={change}
              value={text}
            />
          )
        }}
      </InputChange>
      <InputChange name="text area">
        {(text, change) => {
          return (
            <textarea
              type="text"
              onChange={change}
              value={text}
            />
          )
        }}
      </InputChange>
      <InputChange name="password">
        {(text, change) => {
          return (
            <input
              type="password"
              onChange={change}
              value={text}
            />
          )
        }}
      </InputChange>
    </div>
  );
}

export default App;
