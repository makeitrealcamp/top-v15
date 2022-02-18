import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../store/postsReducer';

export function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsReducer.posts);
  const loading = useSelector(state => state.postsReducer.loading);
  const error = useSelector(state => state.postsReducer.error);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if(loading) return <p>Loding...</p>
  if(error) return <p>Something went wrong</p>
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  )
}
