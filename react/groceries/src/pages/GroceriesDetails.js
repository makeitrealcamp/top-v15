import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getGroceryDetails } from '../store/groceriesReducer';

export function GroceriesDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const name = useSelector(({ groceriesReducer }) => groceriesReducer.name);

  useEffect(() => {
    dispatch(getGroceryDetails(id, navigate));
  }, []);

  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
