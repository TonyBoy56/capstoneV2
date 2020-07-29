import React from "react";
import makeApiCallLogin from '../actions/index';
import { connect } from 'react-redux';

function SignIn() {
  function doSignIn(event) {
    event.preventDefault();
    const signInEmail = event.target.signInEmail.value;
    const signInPassword = event.target.signInPassword.value;
    makeApiCallLogin(signInEmail, signInPassword)
    console.log(makeApiCallLogin())
  }

  return (
    <React.Fragment>
      <form onSubmit = {doSignIn}>
        <input
          type = 'text'
          name = 'signInEmail'
          placeholder = 'Email' />
        <input
          type = 'text'
          name = 'signInPassword'
          placeholder = 'Password' />
        <button type = 'submit'>Sign In</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn;