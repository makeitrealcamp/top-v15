import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { handleChange, signup } from '../store/usersReducer';
import { UserForm } from '../components/UserForm';

function Signup({ email, password, handleChange, signup }) {
  function handleSubmit(e) {
    e.preventDefault();
    signup({ email, password });
  }

  return (
    <>
      <UserForm
        email={email}
        password={password}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <p>Already have an account? sign in <Link to="/signin">Here</Link></p>
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
  signup,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
