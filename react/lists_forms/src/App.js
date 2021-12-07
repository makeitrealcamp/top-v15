import { useState } from 'react'
import './App.css';

function Form() {
  const [names, setNames] = useState([{ name: 'maria', terms: false }])
  const [name, setName] = useState('')
  const [terms, setTerms] = useState(false)

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newUser = {
      name,
      terms,
    }
    setNames(prevNames => {
      // return [...prevNames, name]
      return prevNames.concat(newUser)
    })
    // setNames([...names, name])
    setName('')
    setTerms(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={name} />
        <input type="checkbox" onChange={e => setTerms(e.target.checked)} checked={terms} />
        <button type="submit">Enviar</button>
      </form>
      <div>
        {names.map((el) => {
          return (
            <article>
              <p>{el.name}</p>
              <p>{el.terms ? 'accepted' : 'not accepted'}</p>
            </article>
          )
        })}
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
