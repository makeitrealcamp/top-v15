import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts'
    })
      .then((response) => {
        setPosts(response.data)
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Oops Something went wrong</p>
  return (
    <div className="App">
      <h1>Posts</h1>
      {!!posts && posts.length > 0 && posts.map(post => (
        <article key={post.id} data-testid="post">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}

export default App;
