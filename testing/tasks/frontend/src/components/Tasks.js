import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTasks } from '../store/tasksReducer/actions';
import Task from "./Task";

function Tasks({ tasks, getTasks }) {
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="tasks">
      <h1>Tasks</h1>
      {(!tasks || tasks.length <= 0) && (
        <p>No tasks created yet. Create one <Link to="/create">here</Link></p>
      )}
      {tasks && tasks.length > 0 && tasks.map(({ _id, name, done }) => (
        <Task
          key={_id}
          id={_id}
          name={name}
          done={done}
        />
      ))}
    </div>
  )
}

function mapStateToProps({ tasksReducer: { tasks } }) {
  return { tasks };
}

const mapDispatchToProps = {
  getTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
