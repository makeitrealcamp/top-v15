import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
} from 'react-router-dom';
import { Posts } from './pages/Posts';
import { Post } from './pages/Post';
import './App.css';

function Navbar() {
  const links = [
    { path: '/posts', content: 'posts' },
    { path: '/users', content: 'user' },
  ];

  return (
    <nav>
      <ul>
        {links.map(({ path, content }, index) => (
          <li key={index}>
            <Link to={path}>{content}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </Router>
  )
}

export default App;
