import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Register from './components/register';
import Store from './components/store';

function App(props) {
  const { login, user } = props;
  return <>{login ? <Register /> : <Store user={user} />}</>;
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
