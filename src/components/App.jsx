import React from 'react';
import { AuthProvider } from '../context/AuthContext';
import { SignUp, Dashboard, Confirm } from './index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signup" component={SignUp} />
          <Route path="/confirm" component={Confirm} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
