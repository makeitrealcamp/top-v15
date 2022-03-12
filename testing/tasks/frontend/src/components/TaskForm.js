import React from 'react';

export function TaskForm({ name, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        value={name}
      />
      <button>Submit</button>
    </form>
  )
}
