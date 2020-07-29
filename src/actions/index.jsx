import * as c from './ActionsTypes';
// import axios from 'axios'
// import rateLimit from 'axios-rate-limit';

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

// API.login("<email>", "<password>").then(<?>).catch(<?>);


// const API = require('call-of-duty-api')();
// console.log(API);


const makeApiCallLogin = (signInEmail, signInPassword) => {
  const API = require('call-of-duty-api')();
  // return dispatch => {
  //   dispatch(requestLogin);
  //   return fetch(API.login(signInEmail, signInPassword))
  //     .then(response => response.json())
  //     .then(jsonifiedReponse => {
  //       dispatch(getLoginSuccess(jsonifiedReponse.results));
  //     })
  //     .catch((error) => {
  //       dispatch(getLoginFailure(error));
  //     });
  //   }
  fetch(API.login(signInEmail, signInPassword))
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Nope:', error);
    });
}

export default makeApiCallLogin;

