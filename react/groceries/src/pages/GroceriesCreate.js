import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeGroceriesInput, createGroceries } from '../store/groceriesReducer';

export function GroceriesCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(({ groceriesReducer }) => groceriesReducer.name);
  const price = useSelector(({ groceriesReducer }) => groceriesReducer.price);
  const available = useSelector(({ groceriesReducer }) => groceriesReducer.available);
  const message = useSelector(({ groceriesReducer }) => groceriesReducer.message);

  function handleChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    dispatch(changeGroceriesInput(e.target.name, value));
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(createGroceries(name, price, available, navigate));
    }}>
      {message && <p>{message}</p>}
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={name}
      />
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        name="price"
        onChange={handleChange}
        value={price}
      />
      <label htmlFor="available">Is available?</label>
      <input
        type="checkbox"
        id="available"
        name="available"
        onChange={handleChange}
        checked={available}
      />
      <button>Create Product</button>
    </form>
  )
}
