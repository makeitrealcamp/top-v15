import React from 'react';
import { connect } from 'react-redux';
import { createTask, handleChange } from '../store/tasksReducer/actions';
import { TaskForm } from '../components/TaskForm';

function Create({
  name,
  message,
  handleChange,
  createTask,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    createTask({ name });
  }

  return (
    <>
      <TaskForm
        name={name}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {message && <p className="success-message">{message}</p>}
    </>
  )
}

function mapStateToProps({ tasksReducer: { name, message }}) {
  return {
    name,
    message,
  };
}

const mapDispatchToProps = {
  handleChange,
  createTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
