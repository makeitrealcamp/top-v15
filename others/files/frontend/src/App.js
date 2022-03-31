import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  function handleImage(file) {
    // const fileReader = new FileReader();

    // fileReader.addEventListener('loadstart', () => console.log('generating preview'));
    // fileReader.addEventListener('load', e => setPreview(e.target.result));
    // fileReader.addEventListener('error', err => console.log(err));
    // fileReader.addEventListener('loadend', () => console.log('process ended'))

    // fileReader.readAsDataURL(file);

    const result = URL.createObjectURL(file);
    setPreview(result);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('email', 'simon@test');
    if(file) {
      formData.append('file', file, file.filename)
    }
    // formData.append('profile', file, file.filename)

    // formData.username = 'simon' X
    // formData.append('username', 'simon'); V

    console.log(formData)
    console.log(formData.get('email'))

    axios({
      method: 'POST',
      baseURL: 'http://localhost:8000',
      url: '/users/profile',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">File</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          multiple
          onChange={e => {
            setFile(e.target.files[0])
            handleImage(e.target.files[0])
            // for(const file in e.target.files)
          }}
        />
        <button type="submit">Send</button>
      </form>
      {preview && (
        <img
          src={preview}
          alt="preview"
          width="600"
        />
      )}
    </div>
  );
}

export default App;
