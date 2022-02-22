import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGroceries } from '../store/groceriesReducer';

export function Groceries() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const groceries = useSelector(({ groceriesReducer }) => groceriesReducer.groceries);
  const loading = useSelector(({ groceriesReducer }) => groceriesReducer.loading);
  const error = useSelector(({ groceriesReducer }) => groceriesReducer.error);

  useEffect(() => {
    dispatch(getGroceries(navigate));
  }, []);

  if(loading) return <p>loading...</p>;
  if(error) return <p>Something went wrong</p>;
  return (
    <div>
      <h1>Groceries</h1>
      {groceries.map(({ _id, name, price }) => (
        <article key={_id}>
          <p>{name}</p>
          <p>{price}</p>
        </article>
      ))}
    </div>
  )
}
