import React from 'react';
import { Link } from 'react-router-dom';

export function NavBar() {
  const token = localStorage.getItem('token');

  return (
    <nav>
      <ul>
        {token ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
