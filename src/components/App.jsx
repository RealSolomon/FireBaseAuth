import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { SignUp, Home, Confirm, PrivateRoute, Login } from './index';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';
import { Header } from './Header';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/confirm" component={Confirm} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
