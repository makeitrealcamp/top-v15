import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/',
    })
      .then(({ data }) => {
        setMessage(data.message);
      })
      .catch(e => {
        console.error(e);
      })
  }, []);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
