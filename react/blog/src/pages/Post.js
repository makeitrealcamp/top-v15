import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { Comments } from '../components/Comments';

export function Article({ post }) {
  return (
    <>
      <h1>{post.title}</h1>
      <p>By: {post.userId}</p>
      <p>{post.body}</p>
    </>
  )
}

const GoBack = styled.button`
  border: ${props => props.primary ? '1px solid #333' : 'none'};
  background-color: lightblue;
  display: block;

  &:hover {
    opacity: 50%;
  }

  &::after {
    content: '';
    height: 1px;
    width: 100%;
    background-color: black;
    margin-top: 5px;
  }

  @media screen and (min-width: 768px) {
    background-color: lightgrey;
  }
`;

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
      <GoBack type="button" onClick={() => navigate(-1)}>Go Back</GoBack>
      <Article post={post} />
      <Comments comments={comments} />
    </div>
  )
}

