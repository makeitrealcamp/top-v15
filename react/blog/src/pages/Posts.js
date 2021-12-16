import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts',
    })
      .then(({ data }) => setPosts(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>error</p>
  return (
    <div className="App">
      {posts.map(({ id, title }) => (
        <article key={id}>
          <h1>{title}</h1>
          <Link to={`/posts/${id}`}>ver más</Link>
        </article>
      ))}
    </div>
  );
}
