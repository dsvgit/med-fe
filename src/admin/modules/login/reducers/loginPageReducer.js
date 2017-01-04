import { TRY_LOGIN, FAILED_LOGIN, CHANGE_LOGIN, CHANGE_PASSWORD, RESET_LOGIN } from '../constants/loginPageConstants';

export default function (state, action) {
  if (typeof state === 'undefined' || action.type === RESET_LOGIN) {
    state = {};
  }

  if (action.type === CHANGE_LOGIN) {
    return {
      ...state,
      login: action.login
    };
  }
  else if (action.type === CHANGE_PASSWORD) {
    return {
      ...state,
      password: action.password
    };
  }
  else if (action.type === TRY_LOGIN) {
    return {
      ...state,
      error: false
    };
  }
  else if (action.type === FAILED_LOGIN) {
    return {
      ...state,
      error: true
    };
  }
  else {
    return state;
  }
}
