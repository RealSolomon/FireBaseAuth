import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { SignUp, Home, Confirm, PrivateRoute } from './index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/confirm" component={Confirm} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
