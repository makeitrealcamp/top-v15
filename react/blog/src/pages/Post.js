import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export function Post() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${postId}`
    })
      .then(({ data }) => {
        setPost(data);
        axios({
          method: 'GET',
          baseURL: 'https://jsonplaceholder.typicode.com',
          url: `/posts/${postId}/comments`,
        })
          .then(({ data }) => setComments(data))
          .finally(() => setLoading(false))
      })
      .catch(() => setError(true))
 }, []);

  if(loading) return <p>Loading...</p>
  if(error) return <p>error</p>
  return (
    <div className="App">
      <button type="button" onClick={() => navigate(-1)}>Go Back</button>
      <h1>{post.title}</h1>
      <p>By: {post.userId}</p>
      <p>{post.body}</p>
      <div>
        <h2>Comments</h2>
        <ul>
          {comments.map(({ id, name, body }) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

