import React from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { history } from './utils/history';
import { NavBar } from './components/NavBar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Create from './pages/Create';

function PrivateRoute(props) {
  const token = localStorage.getItem('token');

  if(!token) return <Redirect to="/signin" />
  return (
    <Route {...props} />
  );
}

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/create">
            <Create />
          </PrivateRoute>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
