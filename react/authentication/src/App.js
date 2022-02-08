import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Home() {
  return <h1>home</h1>
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');
  return !token ? <Navigate to="/login" /> : children;
}

function Login() {
  return (
    <h1>Login</h1>
  )
}

function Products() {
  const navigate = useNavigate()
  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'http://localhost:8000',
      url: '/groceries'
    })
      .then(response => console.log(response))
      .catch(() => {
        navigate('/login');
        localStorage.removeItem('token')
      })
  })
  return <h1>Products</h1>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={() => (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        )}/>
      </Routes>
    </Router>
  );
}

export default App;
