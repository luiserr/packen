import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Register from './components/register';
import Router from './components/routes';

function App(props) {
  const { login, user } = props;
  return <>{login ? <Register /> : <Router user={user} />}</>;
}

const mapStateToProps = state => {
  const {
    application: {
      session: { login, user }
    }
  } = state;
  return {
    login,
    user
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
