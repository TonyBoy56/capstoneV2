import * as c from './ActionsTypes';
const API = require('call-of-duty-api')();
// import axios from 'axios'
// import rateLimit from 'axios-rate-limit';

// Maybe this will work (below) //

// var myHeaders = new Headers();
// let loginKey = await fetch(`${process.env.}`)
// myHeaders.append(loginUrl);

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://profile.callofduty.com/cod/login", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

export const requestLogin = () => ({
  type: c.REQUEST_LOGIN
});

export const getLoginFailure = (error) => ({
  type: c.GET_LOGIN_FAILURE,
  error
});

export const getLoginSuccess = (profiles) => ({
  type: c.GET_LOGIN_SUCCESS,
  profiles
});

const makeApiCallLogin = async (signInEmail, signInPassword) => {
  // const loggedIn = await API.login(signInEmail, signInPassword)
  // .then(() => {
  //   return "It worked! You're Logged In!";
  // })
  // .catch((error) => {
  //   return error;
  // });
  // return loggedIn
}

export default makeApiCallLogin;

