import React from "react";
import makeApiCallLogin from './../actions/index';

function Signin() {
  function doSignin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    makeApiCallLogin.API.login
  }
}