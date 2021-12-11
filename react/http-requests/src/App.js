import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

// JSON - JavaScript Object Notation
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: 'GET', /* 'POST', 'PUT', 'DELETE' */
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/albums/1/photos',
      params: {
        _limit: 10,
      },
      // headers: {
      //   Accept: "application/json"
      // },
      timeout: 1000,
    })
      .then(({ data }/* = response */) => setImages(data))
      .catch((error) => setError(true))
      .finally(() => {
        setLoading(false);
      })
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Something went wrong. Try again later</p>
  return (
    <div className="App">
      {images.map(image => {
        return (
          <img
            key={image.id}
            src={image.thumbnailUrl}
            alt={image.title}
          />
        )
      })}
    </div>
  );
}

export default App;
