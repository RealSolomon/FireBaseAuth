import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';

import { SignUp, Home, Confirm, Login } from './index';
import { Header } from './Header';
import '../App.css';

function App({ loggedIn }) {
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/confirm" component={Confirm} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Router>
      <Header />
      {routes}
    </Router>
  );
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
});

export default connect(mapStateToProps)(App);
