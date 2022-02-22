import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { UserForm } from '../components/UserForm';
import { createUser } from '../store/userReducer';

export function Register() {
  const dispatch = useDispatch();

  function handleSubmit(email, password) {
    dispatch(createUser(email, password))
  }

  return (
    <>
      <UserForm handleSubmit={handleSubmit} buttonText="Create Account" />
      <p>Already have an account? click<Link to="/login">here</Link></p>
    </>
  )
}
