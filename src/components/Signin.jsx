import React from "react";
import makeApiCallLogin from '../actions/index';

function SignIn() {
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    makeApiCallLogin.API.login(email, password)
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