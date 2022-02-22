import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Login } from './pages/Login';
import { Register } from './pages/Register'
import { Home } from './pages/Home';
import { GroceriesCreate } from './pages/GroceriesCreate';
import { GroceriesDetails } from './pages/GroceriesDetails';
import './App.css';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries/create" element={<GroceriesCreate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<GroceriesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
