import * as c from './ActionsTypes';
import axios from 'axios'
import rateLimit from 'axios-rate-limit';

export const requestLogin = () => ({
  type: c.REQUEST_LOGIN
});

export const getLoginFailure = () => ({
  type: c.GET_LOGIN_FAILURE,
  error
});

export const getLoginSuccess = () => ({
  type: c.GET_LOGIN_SUCCESS,
  login
});

// API.login("<email>", "<password>").then(<?>).catch(<?>);


// const API = require('call-of-duty-api')();
// console.log(API);


const makeApiCallLogin = () => {
  const API = require('call-of-duty-api')({ 
    platform: 'psn', 
    rateLimit: { 
      maxRequests: 2, 
      perMilliseconds: 1000, 
      maxRPS: 2 }
    });
  return dispatch => {
    dispatch(requestLogin);
    return fetch(API)
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

