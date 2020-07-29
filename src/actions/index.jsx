import * as c from './ActionsTypes';
// import axios from 'axios'
// import rateLimit from 'axios-rate-limit';

export const requestLogin = () => ({
  type: c.REQUEST_LOGIN
});

export const getLoginFailure = () => ({
  type: c.GET_LOGIN_FAILURE,
});

export const getLoginSuccess = () => ({
  type: c.GET_LOGIN_SUCCESS,
});

// API.login("<email>", "<password>").then(<?>).catch(<?>);


// const API = require('call-of-duty-api')();
// console.log(API);


const makeApiCallLogin = (signInEmail, signInPassword) => {
  const API = require('call-of-duty-api')({ 
    // platform: 'psn', 
    // rateLimit: { 
    //   maxRequests: 2, 
    //   perMilliseconds: 1000, 
    //   maxRPS: 2 }
    });
  return dispatch => {
    dispatch(requestLogin);
    return fetch(API.login(signInEmail, signInPassword))
      .then(response => response.json())
      .then(jsonifiedReponse => {
        dispatch(getLoginSuccess(jsonifiedReponse.results));
      })
      .catch((error) => {
        dispatch(getLoginFailure(error));
      });
    }
}

export default makeApiCallLogin;

