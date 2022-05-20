import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

function App() {
  const ref = useRef();
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    ref.current = io('http://localhost:8000');

    ref.current.on('welcome', data => {
      console.log(data);
    });

    ref.current.on('message', data => {
      console.log(data);
    });

    ref.current.on('join', data => {
      console.log(data);
    });

    ref.current.on('private', data => {
      console.log(data);
    });

    ref.current.on('leave', data => {
      console.log(data);
    });

    return () => {
      ref.current.removeAllListeners();
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // ref.current.emit('message', { sender, message });
    ref.current.emit('private', { sender, message });
  }

  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          ref.current.removeAllListeners();
          ref.current.close();
        }}
      >
        Disconnect
      </button>
      <button
        type="button"
        onClick={() => ref.current.emit('join')}
      >
        Join
      </button>
      <button
        type="button"
        onClick={() => ref.current.emit('leave')}
      >
        Leave
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="sender">Sender</label>
        <input
          type="text"
          id="sender"
          name="sender"
          onChange={(e) => setSender(e.target.value)}
          value={sender}
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default App;
