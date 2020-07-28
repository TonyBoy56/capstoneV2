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

// export const makeApiCallLogin = () => {
//   return dispatch => {
//     dispatch(requestLogin);
//     return (
//       // fetch(API HERE)
//     );
//   }
// }