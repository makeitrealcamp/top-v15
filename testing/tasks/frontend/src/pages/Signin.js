import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleChange, signin } from '../store/usersReducer';
import { UserForm } from '../components/UserForm';

function Signin({ email, password, handleChange, signin }) {
  function handleSubmit(e) {
    e.preventDefault();
    signin({ email, password });
  }

  return (
    <>
      <UserForm
        email={email}
        password={password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <p>Don't have an account yet? sign up <Link to="/signup">Here</Link></p>
    </>
  )
}

function mapStateToProps({ usersReducer: { email, password } }) {
  return {
    email, password
  }
}

const mapDispatchToProps = {
  handleChange,
  signin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
