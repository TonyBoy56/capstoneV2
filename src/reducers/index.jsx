import * as c from './../actions/ActionsTypes';

let initialState = {
  isLoading: false,
  profiles: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_LOGIN:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        profiles: action.profiles
      });
    case c.GET_LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
};