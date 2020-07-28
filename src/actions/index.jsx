import * as c from './ActionsTypes';

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

API.login("<email>", "<password>").then(<?>).catch(<?>);



export const makeApiCallLogin = () => {
  const API = require('call-of-duty-api')({ 
    platform: 'psn', 
    ratelimit: { 
      maxRequests: 2, 
      perMilliseconds: 1000, 
      maxRPS: 2 }
    });
    console.log(API);
  // return dispatch => {
  //   dispatch(requestLogin);
  //   return (
  //     fetch(API HERE)
  //   );
  // }
}