import { UserForm } from '../components/UserForm';
import { Link } from 'react-router-dom';

export function Login() {
  function handleSubmit() {}

  return (
    <>
      <UserForm handleSubmit={handleSubmit} buttonText="Login" />
      <p>Don't have an account? create one<Link to="/register">here</Link></p>
    </>
  );
}
