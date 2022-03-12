import React from 'react';

export function UserForm({ handleSubmit, handleChange, email, password }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={handleChange}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={handleChange}
        value={password}
      />
      <button data-testid="signup">Submit</button>
    </form>
  )
}
