import { useState, useEffect } from 'react';
import axios from 'axios';
import { Articles } from '../components/Articles'
import './Posts.css'

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
    <div className="Posts">
      <Articles posts={posts} />
    </div>
  );
}
